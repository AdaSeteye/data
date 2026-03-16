import Link from "next/link";
import Header from "@/components/Header";
import projectsIndex from "@/../content/projects/index.json";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-primary mb-2">Projects</h1>
        <p className="text-slate-600 mb-10">Data science and ML work — classification, forecasting, NLP, experimentation, and more.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {projectsIndex.map((p: { slug: string; title: string; tagline: string; tags: string[]; metric: string }) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="block p-6 rounded-xl bg-card border border-slate-200 hover:border-accent hover:shadow-md transition"
            >
              <h2 className="font-semibold text-primary text-lg mb-2">{p.title}</h2>
              <p className="text-slate-600 text-sm mb-3">{p.tagline}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">{t}</span>
                ))}
              </div>
              <p className="text-xs text-accent font-medium">{p.metric}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
