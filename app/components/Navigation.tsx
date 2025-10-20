import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-serif text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition" style={{ fontFamily: 'var(--font-playfair)' }}>
            A & A
          </Link>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
