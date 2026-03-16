import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-card/80 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-primary hover:text-accent transition">
          Ada Seteye
        </Link>
        <div className="flex gap-6">
          <Link href="/projects" className="text-slate-600 hover:text-accent transition">Projects</Link>
          <Link href="/about" className="text-slate-600 hover:text-accent transition">About</Link>
          <Link href="/contact" className="text-slate-600 hover:text-accent transition">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
