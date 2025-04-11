
// Server-side API for handling registration data
import { Registration, saveRegistration, getAllRegistrations } from '../utils/registrationDatabase';

// Create an API route to handle registration submission
export async function handleRegistrationSubmission(registrationData: Registration): Promise<{ success: boolean; message: string }> {
  try {
    // Add timestamp if not provided
    if (!registrationData.timestamp) {
      registrationData.timestamp = new Date().toISOString();
    }

    // Save to our local database file
    const saved = saveRegistration(registrationData);
    
    if (!saved) {
      throw new Error('Failed to save registration');
    }

    return { 
      success: true, 
      message: 'Registration saved successfully' 
    };
  } catch (error) {
    console.error('Error in handleRegistrationSubmission:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

// Function to retrieve all registrations
export async function getRegistrations(): Promise<Registration[]> {
  return getAllRegistrations();
}

