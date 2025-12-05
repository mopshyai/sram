import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import collegeLogo from "@/assets/college-logo.jpg";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      children: [
        { name: "About Us", path: "/about" },
        { name: "Chairman's Message", path: "/chairman-message" },
        { name: "Mission & Vision", path: "/mission-vision" },
      ],
    },
    {
      name: "Academics",
      path: "/courses",
      children: [
        { name: "All Courses", path: "/courses" },
        { name: "Departments", path: "/departments" },
      ],
    },
    { name: "Admissions", path: "/admissions" },
    { name: "Facilities", path: "/facilities" },
    { name: "NCC / NSS", path: "/ncc-nss" },
    { name: "Gallery", path: "/gallery" },
    {
      name: "Downloads",
      path: "/downloads",
      children: [
        { name: "Downloads", path: "/downloads" },
        { name: "Mandatory Disclosure", path: "/mandatory-disclosure" },
        { name: "Anti-Ragging Policy", path: "/anti-ragging" },
        { name: "Code of Conduct", path: "/code-of-conduct" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-primary-dark text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:9837320170" className="flex items-center gap-1 hover:text-gold transition-colors">
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">9837320170</span>
            </a>
            <a href="mailto:shriramadarsh190@gmail.com" className="flex items-center gap-1 hover:text-gold transition-colors">
              <Mail className="w-3 h-3" />
              <span className="hidden md:inline">shriramadarsh190@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden lg:flex items-center gap-1 text-primary-foreground/80">
              <Clock className="w-3 h-3" />
              Mon - Sat: 9:00 AM - 5:00 PM
            </span>
            <div className="flex gap-1 text-xs">
              <button className="px-2 py-0.5 bg-primary-foreground/10 rounded hover:bg-primary-foreground/20">A+</button>
              <button className="px-2 py-0.5 bg-primary-foreground/10 rounded hover:bg-primary-foreground/20">A</button>
              <button className="px-2 py-0.5 bg-primary-foreground/10 rounded hover:bg-primary-foreground/20">A-</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={collegeLogo} 
                alt="Shri Ram Adarsh Mahavidyalaya Logo" 
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md group-hover:shadow-lg transition-shadow border-2 border-gold"
              />
              <div className="hidden sm:block">
                <h1 className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-primary leading-tight">
                  Shri Ram Adarsh Mahavidyalaya
                </h1>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Panwari, Sikandra, Agra
                </p>
              </div>
            </Link>

            {/* Center - Affiliation Badge */}
            <div className="hidden lg:flex flex-col items-center text-center px-4 border-l border-r border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Affiliated to</span>
              <span className="font-heading text-sm font-semibold text-navy">Dr. B.R. Ambedkar University, Agra</span>
              <span className="text-xs text-gold font-medium">NAAC Accredited</span>
            </div>

            {/* Right - CTA */}
            <div className="flex items-center gap-3">
              <Button asChild className="hidden md:inline-flex bg-gold hover:bg-gold-light text-gold-foreground font-semibold pulse-glow">
                <Link to="/admissions">Admissions 2025-26</Link>
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-md hover:bg-muted"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <nav className="hidden lg:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="gap-0">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.path}>
                  {link.children ? (
                    <>
                      <NavigationMenuTrigger 
                        className={cn(
                          "bg-transparent hover:bg-primary-light data-[state=open]:bg-primary-light rounded-none h-12 px-4",
                          isActive(link.path) && "bg-primary-light"
                        )}
                      >
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-48 gap-1 p-2 bg-card">
                          {link.children.map((child) => (
                            <li key={child.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={child.path}
                                  className={cn(
                                    "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary",
                                    isActive(child.path) && "bg-muted text-primary font-medium"
                                  )}
                                >
                                  {child.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={cn(
                        "flex h-12 items-center px-4 font-medium transition-colors hover:bg-primary-light",
                        isActive(link.path) && "bg-primary-light"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-b border-border shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  {link.children ? (
                    <details className="group">
                      <summary className="flex items-center justify-between p-3 rounded-md hover:bg-muted cursor-pointer list-none">
                        <span className={cn("font-medium", isActive(link.path) && "text-primary")}>
                          {link.name}
                        </span>
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="ml-4 mt-1 space-y-1 border-l-2 border-muted pl-4">
                        {link.children.map((child) => (
                          <li key={child.path}>
                            <Link
                              to={child.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={cn(
                                "block p-2 rounded-md hover:bg-muted text-sm",
                                isActive(child.path) && "text-primary font-medium bg-muted"
                              )}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block p-3 rounded-md hover:bg-muted font-medium",
                        isActive(link.path) && "text-primary bg-muted"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-3">
                <Button asChild className="w-full bg-gold hover:bg-gold-light text-gold-foreground">
                  <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>
                    Admissions 2025-26
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;