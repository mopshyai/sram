import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-white py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="font-heading text-xl font-bold">
            Shri Ram Adarsh Mahavidyalaya
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="/" className="hover:text-gold transition-colors">Home</a>
            <a href="/about" className="hover:text-gold transition-colors">About</a>
            <a href="/courses" className="hover:text-gold transition-colors">Courses</a>
            <a href="/admissions" className="hover:text-gold transition-colors">Admissions</a>
            <a href="/contact" className="hover:text-gold transition-colors">Contact</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-primary-dark text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p>© 2025 Shri Ram Adarsh Mahavidyalaya, Panwari, Sikandra, Agra</p>
          <p className="text-sm mt-2 text-white/70">Affiliated to Dr. Bhimrao Ambedkar University, Agra</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
