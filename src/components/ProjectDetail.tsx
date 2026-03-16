"use client";

import Link from "next/link";
import type { ProjectData } from "@/lib/projects";
import {
  ROCChart,
  BarChartHorizontal,
  ForecastChart,
  HRChart,
  ConversionChart,
  ScoreDistChart,
} from "./ProjectCharts";

const SECTION_LABELS: Record<string, string> = {
  problem: "Problem & context",
  data: "Data",
  approach: "Approach",
  results: "Results",
  next: "What I'd do next",
};

export default function ProjectDetail({ project }: { project: ProjectData }) {
  const { sections, charts } = project;

  const renderChart = (key: string, chart: { title: string; data?: unknown[]; barData?: unknown[] }) => {
    const data = (chart.data ?? chart.barData ?? []) as unknown[];
    if (!data.length) return null;
    switch (key) {
      case "roc":
        return <ROCChart data={data} title={chart.title} />;
      case "feature_importance":
      case "topic_terms":
        return <BarChartHorizontal data={data} title={chart.title} />;
      case "forecast":
        return <ForecastChart data={data} title={chart.title} />;
      case "hr_at_k":
        return <HRChart data={data} title={chart.title} />;
      case "conversion":
        return <ConversionChart data={data} title={chart.title} />;
      case "scores":
        return <ScoreDistChart data={data} title={chart.title} />;
      default:
        return null;
    }
  };

  return (
    <article className="max-w-3xl">
      <Link href="/projects" className="text-accent text-sm font-medium hover:underline mb-6 inline-block">
        ← All projects
      </Link>
      <h1 className="text-3xl font-bold text-primary mb-2">{project.title}</h1>
      <p className="text-slate-600 mb-4">{project.tagline}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-600">
            {t}
          </span>
        ))}
        <span className="text-xs text-accent font-medium">{project.metric}</span>
      </div>

      {["problem", "data", "approach", "results"].map((key) => (
        <section key={key} className="mb-8">
          <h2 className="text-lg font-semibold text-primary mb-2">{SECTION_LABELS[key]}</h2>
          <p className="text-slate-600 leading-relaxed">{(sections as Record<string, string>)[key]}</p>
          {key === "results" && charts && (
            <div className="mt-4">
              {Object.entries(charts).map(([chartKey, chart]) => {
                const c = chart as { title: string; data?: unknown[]; barData?: unknown[] };
                if (c.data?.length || c.barData?.length) {
                  return <div key={chartKey}>{renderChart(chartKey, c)}</div>;
                }
                return null;
              })}
            </div>
          )}
        </section>
      ))}

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-primary mb-2">{SECTION_LABELS.next}</h2>
        <ul className="list-disc pl-6 text-slate-600 space-y-1">
          {sections.next.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
