import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-primary mb-6">Contact</h1>
        <p className="text-slate-600 mb-6">
          I&apos;m open to roles in data science and ML engineering. Reach out for collaboration or opportunities.
        </p>
        <ul className="space-y-2 text-slate-600">
          <li>
            <a href="https://github.com/AdaSeteye" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub — AdaSeteye
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/adaseteye" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <span className="text-slate-500">Email: </span>
            <a href="mailto:ada@example.com" className="text-accent hover:underline">ada@example.com</a>
            <span className="text-slate-400 text-sm ml-2">(replace with your email)</span>
          </li>
        </ul>
      </main>
    </>
  );
}
