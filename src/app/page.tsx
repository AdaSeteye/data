import Link from "next/link";
import Header from "@/components/Header";
import projectsIndex from "@/../content/projects/index.json";

const featured = projectsIndex.filter((p: { featured: boolean }) => p.featured);

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <section className="mb-20">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Hi, I&apos;m Ada Seteye
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            I build models and pipelines that turn data into decisions, from churn prediction and demand forecasting to NLP and experimentation. Here&apos;s a selection of projects that show how I work.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-6">Featured projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((p: { slug: string; title: string; tagline: string; tags: string[]; metric: string }) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="block p-6 rounded-xl bg-card border border-slate-200 hover:border-accent hover:shadow-md transition"
              >
                <h3 className="font-semibold text-primary text-lg mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{p.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">{t}</span>
                  ))}
                </div>
                <p className="text-xs text-accent font-medium">{p.metric}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/projects" className="text-accent font-medium hover:underline">
              View all projects →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
