import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const phoneNumber = "0728 806996";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-gray-900">
            Book Your Event
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6 py-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <Phone className="h-8 w-8 text-primary" />
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-2">Call us to book your event</p>
            <p className="text-3xl font-bold text-primary">{phoneNumber}</p>
          </div>
          <div className="flex space-x-4 w-full">
            <Button
              onClick={handleCall}
              className="flex-1 bg-primary hover:bg-primary/90 text-white"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            <Button onClick={onClose} variant="outline" className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
