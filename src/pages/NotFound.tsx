import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { MoveLeft, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-32 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto text-accent shadow-xl">
            <AlertCircle size={32} />
          </div>
          <h1 className="text-6xl font-heading font-black text-foreground">404</h1>
          <h2 className="text-2xl font-heading font-bold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="get-quote-pill px-8 py-3.5 text-xs font-black uppercase tracking-widest inline-flex items-center gap-2"
            >
              <MoveLeft size={16} /> Return to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
