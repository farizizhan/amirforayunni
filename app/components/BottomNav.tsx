'use client';

import Link from "next/link";
import { FaDirections, FaMapMarkerAlt, FaGift, FaEnvelope, FaImages } from "react-icons/fa";

export default function BottomNav() {
  const navItems = [
    {
      icon: FaImages,
      label: "Galeri",
      href: "/gallery",
      action: "link"
    },
    {
      icon: FaEnvelope,
      label: "RSVP",
      href: "/rsvp",
      action: "link"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Ucapan",
      href: "#guestbook",
      action: "scroll"
    },
    {
      icon: FaGift,
      label: "Hadiah",
      href: "/registry",
      action: "link"
    },
    {
      icon: FaDirections,
      label: "Waze",
      href: "https://www.waze.com/ul?q=Willow Hall Forrest Valley Bandar Mahkota Cheras&navigate=yes",
      action: "external"
    },
  ];

  const handleClick = (e: React.MouseEvent, action: string, href: string) => {
    if (action === "scroll" && href.startsWith("#")) {
      e.preventDefault();

      // Check if we're on the homepage
      if (window.location.pathname === "/") {
        // We're on homepage, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // We're on another page, navigate to homepage with hash
        window.location.href = "/" + href;
      }
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 border-t border-purple-200 shadow-md backdrop-blur-sm" aria-label="Bottom navigation">
      <div className="flex justify-around items-center py-1 px-1">
        {navItems.map((item, index) => {
          const ItemIcon = item.icon;
          const commonClasses = "flex flex-col items-center justify-center gap-0.5 py-2 px-2 text-purple-600 hover:text-purple-700 transition-colors min-h-[56px] min-w-[48px]";

          return (
            <div key={index} className="flex-1 flex justify-center">
              {item.action === "external" ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commonClasses}
                  aria-label={`Navigate with ${item.label}`}
                >
                  <ItemIcon className="text-xl" aria-hidden="true" />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </a>
              ) : (
                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item.action, item.href)}
                  className={commonClasses}
                  aria-label={`Navigate to ${item.label}`}
                >
                  <ItemIcon className="text-xl" aria-hidden="true" />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
