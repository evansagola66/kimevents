import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceSectionProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  reverse?: boolean;
  learnMoreLink?: string;
}

const ServiceSection = ({
  title = "Service Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  imageUrl = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  imageAlt = "Service image",
  reverse = false,
  learnMoreLink = "#",
}: ServiceSectionProps) => {
  return (
    <div className="w-full py-16 px-4 md:px-8 bg-white">
      <div
        className={`container mx-auto flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <div className="w-20 h-1 bg-primary"></div>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          <Button
            variant="outline"
            className="group mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            onClick={() => (window.location.href = learnMoreLink)}
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
