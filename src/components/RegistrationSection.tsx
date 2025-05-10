import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { handleRegistrationSubmission } from "@/server/api";

interface RegistrationFormData {
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
}

const RegistrationSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const googleSheetWebhookUrl = "https://sheet.best/api/sheets/1bS26QPZsea7F6THkVKoFdEMKBl_nWlh-hIgRSSIaVqU";
  
  const [formData, setFormData] = useState<RegistrationFormData>({
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
      const newRegistration = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      const result = await handleRegistrationSubmission(newRegistration);
      
      if (!result.success) {
        throw new Error(result.message);
      }
      
      console.log("Registration saved to local database");
      
      try {
        await fetch(googleSheetWebhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newRegistration),
        });
        console.log("Data also sent to Google Sheet");
      } catch (err) {
        console.error("Failed to send to Google Sheet, but local save succeeded:", err);
      }
      
      toast({
        title: "Registration Submitted",
        description: "We've received your registration. We'll get back to you soon!",
      });
      
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
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf5431GGbfLU0T66aF68YA87YqMfK-F7pErPN6tEjTpqWMnHA/viewform?usp=sharing" target="_blank" rel="noopener noreferrer">
      Click here
    </a>
  );  
};

export default RegistrationSection;
