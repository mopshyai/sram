import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import collegeLogo from "@/assets/college-logo.jpg";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const importantLinks = [
    { name: "Downloads", path: "/downloads" },
    { name: "Anti-Ragging Policy", path: "/anti-ragging" },
    { name: "Code of Conduct", path: "/code-of-conduct" },
    { name: "Mandatory Disclosure", path: "/mandatory-disclosure" },
    { name: "Mission & Vision", path: "/mission-vision" },
    { name: "NCC / NSS", path: "/ncc-nss" },
  ];

  const courses = [
    "B.Ed", "D.El.Ed (BTC)", "LLB", "BA LLB",
    "D.Pharma", "ITI", "B.A.", "B.Sc.", "B.Com.",
    "M.A.", "M.Sc."
  ];

  return (
    <footer className="bg-primary-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={collegeLogo} 
                alt="Shri Ram Adarsh Mahavidyalaya Logo" 
                className="w-12 h-12 rounded-full object-cover border-2 border-gold"
              />
              <div>
                <h3 className="font-heading text-lg font-bold">Shri Ram Adarsh</h3>
                <p className="text-sm text-primary-foreground/70">Mahavidyalaya</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
              Providing quality higher education in rural Agra since our establishment. 
              Committed to excellence in education, discipline, and character building.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-colors inline-flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold">Important Links</h4>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-colors inline-flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Panwari, Sikandra, Agra - 282007<br />
                  Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <a href="tel:9837320170" className="hover:text-gold block">9837320170</a>
                  <a href="tel:9690704180" className="hover:text-gold block">9690704180</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:shriramadarsh190@gmail.com" className="text-sm text-primary-foreground/80 hover:text-gold break-all">
                  shriramadarsh190@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Mon - Sat: 9:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Programs Banner */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/20">
          <h4 className="font-heading text-center text-lg font-bold mb-4 text-gold">Programs Offered</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {courses.map((course) => (
              <span key={course} className="px-3 py-1 text-xs rounded-full bg-primary-foreground/10 text-primary-foreground/90">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-navy py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-primary-foreground/70">
            <p>© 2025 Shri Ram Adarsh Mahavidyalaya. All Rights Reserved.</p>
            <p>Affiliated to Dr. Bhimrao Ambedkar University, Agra</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;