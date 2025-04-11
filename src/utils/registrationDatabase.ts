
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

// Get all registrations
export const getAllRegistrations = async (): Promise<Registration[]> => {
  try {
    const response = await fetch('/api/registrations');
    if (!response.ok) {
      throw new Error('Failed to fetch registrations');
    }
    return await response.json();
  } catch (error) {
    console.error('Error reading registrations database:', error);
    return [];
  }
};

// Save a new registration
export const saveRegistration = async (registration: Registration): Promise<boolean> => {
  try {
    const response = await fetch('/api/registrations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registration),
    });

    if (!response.ok) {
      throw new Error(`Failed to save registration (status: ${response.status})`);
    }

    // Attempt to read JSON response, fallback to true if no structured response
    try {
      const result = await response.json();
      return result?.success ?? true;
    } catch (parseError) {
      // If the server doesn't return JSON, assume success if status was OK
      return true;
    }
  } catch (error) {
    console.error('Error saving registration:', error);
    return false;
  }
};
