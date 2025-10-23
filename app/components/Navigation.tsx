import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-purple-50/80 dark:bg-purple-100/80 backdrop-blur-sm shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center h-12 items-center">
          <Link href="/" className="text-lg font-serif text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition" style={{ fontFamily: 'var(--font-playfair)' }} aria-label="Homepage - Amir and Ayunni">
            A & A
          </Link>
        </div>
      </div>
    </nav>
  );
}
