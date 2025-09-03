import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface ContactSectionProps {
  address?: string;
  phone?: string;
  email?: string;
  businessHours?: string;
  mapUrl?: string;
}

const ContactSection = ({
  address = "Lurambi Market, C41, Kakamega",
  phone = "0728 806996",
  email = "info@kimsevents.com",
  businessHours = "Mon-Sat: 8:00 AM - 6:00 PM",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7576941440757!2d34.7518!3d0.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTYnNTkuOSJOIDM0wrA0NScwNi41IkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske",
}: ContactSectionProps) => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out to us for all your event rental needs. We're here to help
            make your event memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KIM EVENTS Location"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Our Location
                      </h4>
                      <p className="text-gray-600 mt-1">{address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Phone Number
                      </h4>
                      <p className="text-gray-600 mt-1">
                        <a
                          href={`tel:${phone}`}
                          className="hover:text-primary transition-colors"
                        >
                          {phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Email Address
                      </h4>
                      <p className="text-gray-600 mt-1">
                        <a
                          href={`mailto:${email}`}
                          className="hover:text-primary transition-colors"
                        >
                          {email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Business Hours
                      </h4>
                      <p className="text-gray-600 mt-1">{businessHours}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
