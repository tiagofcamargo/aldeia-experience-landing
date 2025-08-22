import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import logoLight from "@/assets/logo.png";
import logoDark from "@/assets/logo-preto.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const useDarkLogo = isScrolled || isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Marcas", href: "#marcas" },
    { name: "Inspiração", href: "#inspiracao" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center">
        <img
          src={useDarkLogo ? logoDark : logoLight}
          alt="Aldeia Acabamentos"
          className="h-12 w-auto transition-opacity duration-300"
        />
      </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 font-medium 
                ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-primary"}`}
    >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button 
            variant="luxury" 
            asChild
            className={`gap-2 transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <a href="https://api.whatsapp.com/send/?phone=5562992690128&text&type=phone_number&app_absent=0">
              <MessageCircle 
                className={`w-4 h-4 ${
                  isScrolled ? "text-black" : "text-white"
                }`} 
              />
              Fale com um Consultor
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="luxury" 
              className="w-full gap-2" 
              asChild
            >
              <a href="https://wa.me/5562999999999">
                <MessageCircle className="w-4 h-4" />
                Fale com um Consultor
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;