import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";

const CarpetFlooring = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleGetQuote = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Carpet & Flooring
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Premium flooring solutions for elegant events
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?w=800&q=80"
                alt="Carpet and Flooring"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Elegant Flooring Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                Enhance your venue with our premium carpet and flooring rental
                services:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>Red carpet for VIP entrances</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>Walkway carpets for ceremonies</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>Temporary flooring for outdoor events</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>Dance floor installations</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>Stage flooring and platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>Weather-resistant materials</span>
                </li>
              </ul>
              <Button
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                onClick={handleGetQuote}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">KIM EVENTS</h3>
              <p className="text-gray-400 mt-2">
                Premium Event Rental Services
              </p>
            </div>
          </div>
          <hr className="border-gray-700 my-6" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Kim's Events. Designed with ❤️ by{" "}
              <a
                href="https://stakweb.netlify.app/"
                className="text-white hover:text-sky-400 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stakweb Limited
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default CarpetFlooring;
