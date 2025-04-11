
import fs from 'fs';
import path from 'path';

// Define the registration data structure
export interface Registration {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  education: string;
  nationality: string;
  country: string;
  city: string;
  comments: string;
  hearAbout: string;
  timestamp: string;
}

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

// Get all registrations
export const getAllRegistrations = (): Registration[] => {
  try {
    initDatabaseFile();
    const data = fs.readFileSync(DB_FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading registrations database:', error);
    return [];
  }
};

// Save a new registration
export const saveRegistration = (registration: Registration): boolean => {
  try {
    const registrations = getAllRegistrations();
    registrations.push(registration);
    ensureDirectoryExists();
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(registrations, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving registration:', error);
    return false;
  }
};

