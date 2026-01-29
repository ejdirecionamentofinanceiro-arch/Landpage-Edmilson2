import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin, Mail, Phone, Instagram } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="EJ Direcionamento Financeiro" className="h-12 w-auto object-contain" />
            <span className="font-display font-bold text-lg tracking-tight text-primary hidden sm:block">
              Direcionamento Financeiro
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contato")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6"
            >
              Falar com Consultor
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-left py-2 px-4 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contato")}
              className="w-full mt-2"
            >
              Falar com Consultor
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/images/logo.png" alt="EJ Direcionamento Financeiro" className="h-10 w-auto object-contain" />
                <span className="font-display font-bold text-lg tracking-tight">
                  Direcionamento Financeiro
                </span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
                Consultoria financeira estratégica para MEIs, pequenas empresas e prestadores de serviço. Organização, controle e crescimento sustentável.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-lg">Navegação</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-lg">Contato</h4>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/edmilson-junior-a11629150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/ej.direcionamento/?igsh=cGlpMHhzMG14cWFt#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                  <span>@ej.direcionamento</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                  <Mail size={18} />
                  <span>ejdirecionamentofinanceiro@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                  <Phone size={18} />
                  <span>(83) 98888-0292</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
            <p>&copy; {new Date().getFullYear()} EJ Direcionamento Financeiro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
