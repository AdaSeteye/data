// Content lives at repo root content/
import churn from "../../content/projects/churn-prediction.json";
import demand from "../../content/projects/demand-forecasting.json";
import topic from "../../content/projects/topic-modeling.json";
import rec from "../../content/projects/recommendation-engine.json";
import ab from "../../content/projects/ab-test-analysis.json";
import anomaly from "../../content/projects/anomaly-detection.json";

const projects: Record<string, ProjectData> = {
  "churn-prediction": churn as ProjectData,
  "demand-forecasting": demand as ProjectData,
  "topic-modeling": topic as ProjectData,
  "recommendation-engine": rec as ProjectData,
  "ab-test-analysis": ab as ProjectData,
  "anomaly-detection": anomaly as ProjectData,
};

export type ProjectData = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  metric: string;
  sections: {
    problem: string;
    data: string;
    approach: string;
    results: string;
    next: string[];
  };
  charts?: Record<string, { title: string; data?: unknown[]; [k: string]: unknown }>;
};

export function getProject(slug: string): ProjectData | null {
  return projects[slug] ?? null;
}

export function getAllSlugs(): string[] {
  return Object.keys(projects);
}
