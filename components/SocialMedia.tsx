import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

import React from "react";
import { TooltipProvider } from "./ui/tooltip";

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: "Twitter",
    href: "https://www.twitter.com",
    icon: <Twitter className="w-5 h-5" />,
  },
];

const SocialMedia = () => {
  return (
    <TooltipProvider>
      <div></div>
    </TooltipProvider>
  );
};

export default SocialMedia;
