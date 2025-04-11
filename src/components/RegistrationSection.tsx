
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const RegistrationSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [showWebhookInput, setShowWebhookInput] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted:', formData);
    
    try {
      // If webhook URL is provided, send data to Google Sheets
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors', // Required for most webhook endpoints
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString()
          }),
        });
        
        console.log("Data sent to webhook");
      }
      
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
          <div className="text-right mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowWebhookInput(!showWebhookInput)}
              className="text-xs text-muted-foreground"
            >
              {showWebhookInput ? "Hide Settings" : "Admin Settings"}
            </Button>
          </div>
          
          {showWebhookInput && (
            <div className="mb-8 p-4 border border-dashed border-muted-foreground rounded-md">
              <h3 className="text-sm font-semibold mb-2">Google Sheets Integration</h3>
              <p className="text-xs text-muted-foreground mb-4">
                To save registrations to Google Sheets, create a webhook using Make.com, Zapier, or similar service and paste the URL below.
              </p>
              <Input
                placeholder="Enter webhook URL for Google Sheets integration"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="text-xs"
              />
              <p className="text-xs text-muted-foreground mt-2">
                <a 
                  href="https://zapier.com/apps/google-sheets/integrations" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Learn how to set up a Zapier webhook
                </a>
              </p>
            </div>
          )}
          
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
