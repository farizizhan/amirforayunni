'use client';

import Link from "next/link";
import { FaPhone, FaPlay, FaMapMarkerAlt, FaGift, FaEnvelope } from "react-icons/fa";

export default function BottomNav() {
  const navItems = [
    {
      icon: FaPhone,
      label: "Call",
      href: "tel:+60123456789",
      action: "call"
    },
    {
      icon: FaPlay,
      label: "Gallery",
      href: "/gallery",
      action: "link"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Map",
      href: "#map",
      action: "scroll"
    },
    {
      icon: FaGift,
      label: "Gifts",
      href: "/registry",
      action: "link"
    },
    {
      icon: FaEnvelope,
      label: "RSVP",
      href: "/rsvp",
      action: "link"
    },
  ];

  const handleClick = (e: React.MouseEvent, action: string, href: string) => {
    if (action === "scroll" && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-purple-200 shadow-lg">
      <div className="flex justify-around items-center py-2 px-2">
        {navItems.map((item, index) => {
          const ItemIcon = item.icon;
          const commonClasses = "flex flex-col items-center justify-center gap-1 py-2 px-3 text-purple-600 hover:text-purple-700 transition-colors min-h-[56px] min-w-[56px]";

          return (
            <div key={index} className="flex-1 flex justify-center">
              {item.action === "call" ? (
                <a href={item.href} className={commonClasses}>
                  <ItemIcon className="text-2xl" />
                  <span className="text-xs font-medium">{item.label}</span>
                </a>
              ) : (
                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item.action, item.href)}
                  className={commonClasses}
                >
                  <ItemIcon className="text-2xl" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
