
const fs = require('fs');
const path = require('path');

// Path to the database file
const DB_FILE_PATH = path.join(process.cwd(), 'data', 'registrations.json');

// Ensure the data directory exists
const ensureDirectoryExists = () => {
  const dir = path.dirname(DB_FILE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Initialize the database file if it doesn't exist
const initDatabaseFile = () => {
  ensureDirectoryExists();
  if (!fs.existsSync(DB_FILE_PATH)) {
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify([], null, 2));
  }
};

// Registration storage plugin for Vite
module.exports = function registrationStoragePlugin() {
  return {
    name: 'vite-plugin-registration-storage',
    configureServer(server) {
      // Initialize the database file on server start
      initDatabaseFile();

      // Add API endpoint for saving registrations
      server.middlewares.use('/api/registrations', (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          
          req.on('end', () => {
            try {
              const registration = JSON.parse(body);
              
              // Read existing registrations
              const registrationsStr = fs.readFileSync(DB_FILE_PATH, 'utf8');
              const registrations = JSON.parse(registrationsStr);
              
              // Add the new registration
              registrations.push({
                ...registration,
                timestamp: registration.timestamp || new Date().toISOString()
              });
              
              // Save back to the file
              fs.writeFileSync(DB_FILE_PATH, JSON.stringify(registrations, null, 2));
              
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              console.error('Error saving registration:', error);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: error.message }));
            }
          });
        } else if (req.method === 'GET') {
          try {
            // Read and return all registrations
            const registrationsStr = fs.readFileSync(DB_FILE_PATH, 'utf8');
            const registrations = JSON.parse(registrationsStr);
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(registrations));
          } catch (error) {
            console.error('Error reading registrations:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: error.message }));
          }
        } else {
          next();
        }
      });
    }
  };
};
