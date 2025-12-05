import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const socials = [
  { icon: Facebook, href: "#", bg: "bg-[#1877F2]", label: "Facebook" },
  { icon: Twitter, href: "#", bg: "bg-[#1DA1F2]", label: "Twitter" },
  { icon: Instagram, href: "#", bg: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]", label: "Instagram" },
  { icon: Linkedin, href: "#", bg: "bg-[#0A66C2]", label: "LinkedIn" },
  { icon: Youtube, href: "#", bg: "bg-[#FF0000]", label: "YouTube" },
];

const FloatingSocials = () => {
  return (
    <div className="fixed bottom-6 left-4 z-50 flex gap-1">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`${social.bg} w-8 h-8 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md`}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
};

export default FloatingSocials;
