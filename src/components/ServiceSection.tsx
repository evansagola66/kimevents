import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  learnMoreLink?: string;
}

const ServiceCard = ({
  title = "Service Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imageUrl = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  imageAlt = "Service image",
  learnMoreLink = "#",
}: ServiceCardProps) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    if (learnMoreLink.startsWith("#")) {
      // Convert hash links to proper routes
      const routeMap: { [key: string]: string } = {
        "#tent-hire": "/tent-hire",
        "#chair-table-hire": "/chair-table-hire",
        "#decor-draping": "/decor-draping",
        "#catering-equipment": "/catering-equipment",
        "#generator-hire": "/generator-hire",
        "#event-management": "/event-management",
        "#carpet-flooring": "/carpet-flooring",
        "#transport-logistics": "/transport-logistics",
      };
      const route = routeMap[learnMoreLink];
      if (route) {
        navigate(route);
      }
    } else {
      window.location.href = learnMoreLink;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="group w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          onClick={handleLearnMore}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
