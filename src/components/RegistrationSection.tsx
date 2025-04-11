
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import * as XLSX from 'xlsx';

const RegistrationSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrations, setRegistrations] = useState<any[]>([]);
  
  // Google Sheet webhook URL - hidden from public view
  const googleSheetWebhookUrl = "https://sheet.best/api/sheets/1bS26QPZsea7F6THkVKoFdEMKBl_nWlh-hIgRSSIaVqU";
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    nationality: '',
    country: '',
    city: '',
    comments: '',
    hearAbout: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const autoExportToExcel = (allRegistrations: any[]) => {
    try {
      // Create a new workbook
      const wb = XLSX.utils.book_new();
      
      // Create a new worksheet with all registrations data
      const ws = XLSX.utils.json_to_sheet(allRegistrations);
      
      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(wb, ws, "Registrations");
      
      // Generate the Excel file
      XLSX.writeFile(wb, "longing-journey-registrations.xlsx");
      
      console.log("Registrations automatically exported to Excel file");
    } catch (error) {
      console.error("Error auto-exporting to Excel:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted:', formData);
    
    try {
      // Add the registration to our local array
      const newRegistration = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      // Update registrations state with the new registration
      const updatedRegistrations = [...registrations, newRegistration];
      setRegistrations(updatedRegistrations);
      
      // Send data to Google Sheet
      await fetch(googleSheetWebhookUrl, {
        method: 'POST',
        mode: 'no-cors', // Required for cross-origin requests
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRegistration),
      });
      
      console.log("Data sent to Google Sheet");
      
      // Auto export all registrations including the new one
      autoExportToExcel(updatedRegistrations);
      
      // Show success message
      toast({
        title: "Registration Submitted",
        description: "We've received your registration. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        education: '',
        nationality: '',
        country: '',
        city: '',
        comments: '',
        hearAbout: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
          Register for the Journey
        </h2>
        
        <div className="decorative-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        </div>
        
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          To secure your spot in the Longing Journey Ziarah Tour, fill out our registration form, and we'll get back to you with more details. Spaces are limited, so early registration is encouraged.
        </p>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="firstName">First Name (Required)</label>
              <Input 
                type="text" 
                id="firstName" 
                name="firstName" 
                value={formData.firstName}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last Name (Required)</label>
              <Input 
                type="text" 
                id="lastName" 
                name="lastName" 
                value={formData.lastName}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email (Required)</label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone (Required)</label>
              <Input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="age">Age (Required)</label>
              <Input 
                type="number" 
                id="age" 
                name="age" 
                min="1" 
                max="120"
                value={formData.age}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="education">Level of Education</label>
              <Input 
                type="text" 
                id="education" 
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="nationality">Nationality (Required)</label>
              <Input 
                type="text" 
                id="nationality" 
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="country">Country (Required)</label>
              <Input 
                type="text" 
                id="country" 
                name="country"
                value={formData.country}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group md:col-span-2">
              <label htmlFor="city">City of Residence (Required)</label>
              <Input 
                type="text" 
                id="city" 
                name="city"
                value={formData.city}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group md:col-span-2">
              <label htmlFor="comments">Comments/Questions/Notes</label>
              <Textarea 
                id="comments" 
                name="comments" 
                rows={4}
                value={formData.comments}
                onChange={handleChange}
              ></Textarea>
            </div>
            
            <div className="form-group md:col-span-2">
              <label htmlFor="hearAbout">How did you hear about us? (Required)</label>
              <select 
                id="hearAbout" 
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                required
                className="w-full border border-input bg-background rounded-md h-10 px-3 py-2 text-base md:text-sm"
              >
                <option value="">Please select</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend/Family">Friend or Family</option>
                <option value="Website">Website</option>
                <option value="Email">Email</option>
                <option value="Community Center">Community Center</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="mt-8 text-center md:col-span-2">
              <Button type="submit" disabled={isSubmitting} className="px-8 py-3">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : "Submit Registration"}
              </Button>
              
              <p className="mt-6 text-sm text-muted-foreground">
                A deposit of $100 per person is needed to secure a seat, with the remaining program fees payable in cash upon arrival to the organizers.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
