import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingSocials from "../FloatingSocials";
import ScrollToTop from "../ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingSocials />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
