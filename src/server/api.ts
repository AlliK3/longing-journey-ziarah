
// Client-side API for handling registration data
import { Registration, saveRegistration, getAllRegistrations } from '../utils/registrationDatabase';

// Handle registration submission - now client-side compatible
export async function handleRegistrationSubmission(registrationData: Registration): Promise<{ success: boolean; message: string }> {
  try {
    // Add timestamp if not provided
    if (!registrationData.timestamp) {
      registrationData.timestamp = new Date().toISOString();
    }

    // Save via the registrationDatabase API which will make the fetch request
    const saved = await saveRegistration(registrationData);
    
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

// Function to retrieve all registrations - now client-side compatible
export async function getRegistrations(): Promise<Registration[]> {
  return await getAllRegistrations();
}
