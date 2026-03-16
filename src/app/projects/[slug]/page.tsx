import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProjectDetail from "@/components/ProjectDetail";
import { getProject, getAllSlugs } from "@/lib/projects";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <ProjectDetail project={project} />
      </main>
    </>
  );
}
