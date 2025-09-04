import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";

const ChairTableHire = () => {
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
            Chair & Table Hire
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Elegant seating and table solutions for your events
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
                alt="Chair and Table Hire"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Premium Furniture Rental
              </h2>
              <p className="text-gray-600 mb-6">
                Choose from our extensive collection of chairs and tables to
                create the perfect seating arrangement for your event:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>Plastic chairs for outdoor events</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>Chiavari chairs for elegant occasions</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>Banquet chairs for formal events</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>Round tables for intimate dining</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>Rectangular tables for buffet setups</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>Cocktail tables for networking events</span>
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

export default ChairTableHire;
