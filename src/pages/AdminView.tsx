
import React, { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface Registration {
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

const AdminView = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch('/api/registrations');
        if (!response.ok) {
          throw new Error('Failed to fetch registrations');
        }
        const data = await response.json();
        setRegistrations(data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
        toast({
          title: 'Error',
          description: 'Failed to load registrations data',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [toast]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Registrations Admin View</h1>
      <p className="text-sm text-muted-foreground mb-8">
        This page is only accessible to administrators and shows all submitted registrations.
      </p>
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p>Loading registrations...</p>
        </div>
      ) : registrations.length === 0 ? (
        <div className="bg-muted p-8 rounded-lg text-center">
          <p>No registrations found</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Phone</th>
                <th className="p-2 text-left">Country</th>
                <th className="p-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((registration, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/50'}>
                  <td className="p-2 border-t">{`${registration.firstName} ${registration.lastName}`}</td>
                  <td className="p-2 border-t">{registration.email}</td>
                  <td className="p-2 border-t">{registration.phone}</td>
                  <td className="p-2 border-t">{registration.country}</td>
                  <td className="p-2 border-t">
                    {new Date(registration.timestamp).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminView;
