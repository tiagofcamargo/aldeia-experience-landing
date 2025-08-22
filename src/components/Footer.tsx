import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logoDark from "@/assets/logo-preto.png"; // use o logo que preferir no avatar

const Footer = () => {
  return (
    <>
      <footer className="bg-luxury-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold luxury-text-gradient">
                Aldeia
              </h3>
              <p className="text-sm text-gray-400 font-light">ACABAMENTOS</p>
              <p className="text-gray-300 leading-relaxed">
                Há 29 anos transformando projetos em realidade através de
                acabamentos premium e atendimento excepcional.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Rua 132, 25,<br />
                    Goiânia - GO,<br />
                    Brasil
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm">(62) 3093-1717</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    contato@aldeiaacabamentos.com.br
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <p>Segunda a Sexta: 8h30 às 18h30</p>
                    <p>Sábado: 9h às 13h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Navegação</h4>
              <nav className="space-y-2">
                <a
                  href="#marcas"
                  className="block text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Marcas
                </a>
                <a
                  href="#inspiracao"
                  className="block text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Galeria de Inspiração
                </a>
                <a
                  href="#contato"
                  className="block text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Contato
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Sobre Nós
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 Aldeia Acabamentos. Todos os direitos reservados.
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/aldeiaacabamentos/"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/aldeiatem/"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                {/* <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <FloatingWhatsApp
        phoneNumber="5562992690128"
        accountName="Aldeia Acabamentos"
        avatar={logoDark} // opcional; pode usar seu logo claro/escuro
        statusMessage="Normalmente responde em minutos"
        chatMessage="Olá! Quero saber mais sobre os acabamentos 👋"
        placeholder="Escreva sua mensagem"
        allowEsc
        allowClickAway
        notification
        // darkMode={false} // habilite se quiser combinar com temas escuros
      />
    </>
  );
};

export default Footer;
