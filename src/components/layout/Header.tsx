import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
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
  const [isHindi, setIsHindi] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    const newIsHindi = !isHindi;
    setIsHindi(newIsHindi);
    
    // Trigger Google Translate
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = newIsHindi ? 'hi' : 'en';
      selectElement.dispatchEvent(new Event('change'));
    }
  };

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
    { name: "Events", path: "/events" },
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
      <div className="bg-primary-dark text-primary-foreground py-1.5 sm:py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center gap-2">
          {/* Contact Info - Hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:9837320170" className="flex items-center gap-1.5 hover:text-gold transition-colors min-h-[44px] sm:min-h-0 items-center">
              <Phone className="w-3.5 h-3.5" />
              <span>9837320170</span>
            </a>
            <a href="mailto:shriramadarsh190@gmail.com" className="hidden md:flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">shriramadarsh190@gmail.com</span>
              <span className="lg:hidden">Email</span>
            </a>
          </div>
          
          {/* Mobile: Call button */}
          <a href="tel:9837320170" className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-xs font-medium">Call Us</span>
          </a>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden lg:flex items-center gap-1 text-primary-foreground/80">
              <Clock className="w-3 h-3" />
              Mon - Sat: 9:00 AM - 5:00 PM
            </span>
            
            {/* Font size controls - Hidden on mobile */}
            <div className="hidden sm:flex gap-1 text-xs items-center">
              <button className="w-7 h-7 flex items-center justify-center bg-primary-foreground/10 rounded hover:bg-primary-foreground/20">A+</button>
              <button className="w-7 h-7 flex items-center justify-center bg-primary-foreground/10 rounded hover:bg-primary-foreground/20">A</button>
              <button className="w-7 h-7 flex items-center justify-center bg-primary-foreground/10 rounded hover:bg-primary-foreground/20">A-</button>
              <span className="w-px h-4 bg-primary-foreground/30 mx-1"></span>
            </div>
            
            {/* Dark mode & Language toggles - Always visible */}
            <div className="flex gap-1.5 items-center">
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 sm:w-7 sm:h-7 flex items-center justify-center bg-primary-foreground/10 rounded hover:bg-primary-foreground/20 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 sm:w-3.5 sm:h-3.5" /> : <Moon className="w-4 h-4 sm:w-3.5 sm:h-3.5" />}
              </button>
              <button 
                onClick={toggleLanguage}
                className={cn(
                  "px-3 py-1.5 sm:px-2 sm:py-0.5 rounded font-medium transition-colors text-xs sm:text-sm min-h-[36px] sm:min-h-0",
                  isHindi ? "bg-gold text-gold-foreground" : "bg-primary-foreground/10 hover:bg-primary-foreground/20"
                )}
              >
                {isHindi ? "EN" : "हिंदी"}
              </button>
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
            <div className="flex items-center gap-2 sm:gap-3">
              <Button asChild className="hidden md:inline-flex bg-gold hover:bg-gold-light text-gold-foreground font-semibold pulse-glow">
                <Link to="/admissions">Admissions 2025-26</Link>
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-md hover:bg-muted active:bg-muted/80 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
        <div className="lg:hidden bg-card border-b border-border shadow-lg animate-fade-in max-h-[70vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  {link.children ? (
                    <details className="group">
                      <summary className="flex items-center justify-between p-3 min-h-[48px] rounded-md hover:bg-muted cursor-pointer list-none active:bg-muted/80">
                        <span className={cn("font-medium", isActive(link.path) && "text-primary")}>
                          {link.name}
                        </span>
                        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="ml-4 mt-1 space-y-1 border-l-2 border-muted pl-4">
                        {link.children.map((child) => (
                          <li key={child.path}>
                            <Link
                              to={child.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={cn(
                                "block p-3 min-h-[44px] flex items-center rounded-md hover:bg-muted text-sm active:bg-muted/80",
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
                        "block p-3 min-h-[48px] flex items-center rounded-md hover:bg-muted font-medium active:bg-muted/80",
                        isActive(link.path) && "text-primary bg-muted"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <Button asChild className="w-full h-12 text-base bg-gold hover:bg-gold-light text-gold-foreground">
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
