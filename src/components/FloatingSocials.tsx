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
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col">
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
  );
};

export default FloatingSocials;
