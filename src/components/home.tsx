import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import ServiceCard from "./ServiceSection";
import ContactSection from "./ContactSection";
import BookingModal from "./BookingModal";
import ScrollToTop from "./ScrollToTop";

const services = [
  {
    id: 1,
    title: "Tent Hire",
    description:
      "We offer a variety of tents including stretch tents, dome tents, high-peak tents, canopies, and gazebos for weddings, funerals, corporate events, and social gatherings.",
    imageUrl: "/tent-hiring-services.jpg",
    link: "#tent-hire",
  },
  {
    id: 2,
    title: "Chair & Table Hire",
    description:
      "Choose from our selection of plastic chairs, chiavari chairs, banquet chairs, and tables (round, rectangular, cocktail) for your event needs.",
    imageUrl:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    link: "#chair-table-hire",
  },
  {
    id: 3,
    title: "Decor & Draping",
    description:
      "Transform your venue with our interior and exterior tent decoration, including fabric draping, stage backdrops, centerpieces, and themed setups.",
    imageUrl:
      "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80",
    link: "#decor-draping",
  },
  {
    id: 4,
    title: "Catering Equipment Hire",
    description:
      "We supply utensils, plates, cutlery, serving dishes, chafing dishes, and glassware for all your catering needs.",
    imageUrl:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    link: "#catering-equipment",
  },
  {
    id: 5,
    title: "Generator Hire",
    description:
      "Ensure uninterrupted power with our backup generators for lighting, sound, and catering equipment at your events.",
    imageUrl: "/generator-hire.jpg",
    link: "#generator-hire",
  },
  {
    id: 6,
    title: "Event Management",
    description:
      "Let us handle the full-service planning, setup, and on-site coordination of your events to ensure a smooth flow.",
    imageUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    link: "#event-management",
  },
  {
    id: 7,
    title: "Carpet & Flooring",
    description:
      "Enhance your venue with our red carpets, walkways, and temporary flooring for outdoor setups.",
    imageUrl:
      "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?w=800&q=80",
    link: "#carpet-flooring",
  },
  {
    id: 8,
    title: "Transport & Logistics",
    description:
      "We provide delivery, setup, and dismantling of tents and equipment at your venue.",
    imageUrl:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    link: "#transport-logistics",
  },
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleOpenBookingModal = () => {
      setIsBookingModalOpen(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("openBookingModal", handleOpenBookingModal);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("openBookingModal", handleOpenBookingModal);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/kim-events-logo.jpeg"
              alt="KIM EVENTS Logo"
              className="w-16 h-16 rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold text-primary">KIM EVENTS</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-800 hover:text-primary font-medium"
              onClick={(e) => handleSmoothScroll(e, "#home")}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-primary font-medium"
              onClick={(e) => handleSmoothScroll(e, "#services")}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-primary font-medium"
              onClick={(e) => handleSmoothScroll(e, "#about")}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-primary font-medium"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
              Contact
            </a>
            <button
              onClick={handleBookNow}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 transition-all duration-300">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-800 hover:text-primary font-medium"
                onClick={(e) => handleSmoothScroll(e, "#home")}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-800 hover:text-primary font-medium"
                onClick={(e) => handleSmoothScroll(e, "#services")}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-800 hover:text-primary font-medium"
                onClick={(e) => handleSmoothScroll(e, "#about")}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-primary font-medium"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                Contact
              </a>
              <button
                onClick={() => {
                  handleBookNow();
                  setIsMenuOpen(false);
                }}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-center w-full"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <HeroCarousel />
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We provide comprehensive event rental services to make your special
            occasions memorable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                imageAlt={service.title}
                learnMoreLink={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
                alt="About KIM EVENTS"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About KIM EVENTS
              </h2>
              <p className="text-gray-600 mb-6">
                KIM EVENTS is a premier event rental service provider based in
                Kakamega. We specialize in providing high-quality tents,
                furniture, decor, and event management services for all types of
                occasions.
              </p>
              <p className="text-gray-600 mb-6">
                With years of experience in the industry, we understand what it
                takes to create memorable events. Our team of professionals is
                dedicated to ensuring that your event is a success from start to
                finish.
              </p>
              <p className="text-gray-600">
                We pride ourselves on our attention to detail, quality
                equipment, and exceptional customer service. Let us help you
                bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <ContactSection />
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
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
              <a
                href="#home"
                className="text-gray-300 hover:text-white"
                onClick={(e) => handleSmoothScroll(e, "#home")}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-white"
                onClick={(e) => handleSmoothScroll(e, "#services")}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white"
                onClick={(e) => handleSmoothScroll(e, "#about")}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                Contact
              </a>
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
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
