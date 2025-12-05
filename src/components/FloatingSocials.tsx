import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

const socials = [
  { icon: Facebook, href: "#", bg: "bg-[#1877F2]", label: "Facebook" },
  { icon: Twitter, href: "#", bg: "bg-[#1DA1F2]", label: "Twitter" },
  { icon: Instagram, href: "#", bg: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]", label: "Instagram" },
  { icon: Linkedin, href: "#", bg: "bg-[#0A66C2]", label: "LinkedIn" },
  { icon: Youtube, href: "#", bg: "bg-[#FF0000]", label: "YouTube" },
  { icon: MessageCircle, href: "https://wa.me/919837320170", bg: "bg-[#25D366]", label: "WhatsApp" },
];

const FloatingSocials = () => {
  return (
    <>
      {/* Desktop: Right side floating */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col hidden md:flex">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`${social.bg} w-10 h-10 flex items-center justify-center text-white hover:w-12 transition-all duration-200 shadow-md`}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>

      {/* Mobile: Bottom floating bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-sm border-t border-border safe-area-bottom">
        <div className="flex items-center justify-around py-2 px-2">
          {socials.slice(0, 5).map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`${social.bg} w-11 h-11 flex items-center justify-center text-white rounded-full shadow-md active:scale-95 transition-transform`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
          {/* WhatsApp with label */}
          <a
            href="https://wa.me/919837320170"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="bg-[#25D366] h-11 px-4 flex items-center justify-center gap-1.5 text-white rounded-full shadow-md active:scale-95 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-medium">Chat</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingSocials;
