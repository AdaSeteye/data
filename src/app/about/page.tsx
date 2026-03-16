import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-primary mb-6">About</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed mb-4">
            I&apos;m a data scientist and ML engineer focused on building models that work in production — from designing experiments and building pipelines to deploying and monitoring them.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            I work across the stack: data cleaning and feature engineering, classical ML and deep learning, A/B testing and causal inference, and putting models behind APIs and dashboards. I care about clarity in communication and rigor in evaluation.
          </p>
          <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Skills & tools</h2>
          <ul className="text-slate-600 list-disc pl-6 space-y-1">
            <li>Python (pandas, scikit-learn, PyTorch, XGBoost), SQL, R</li>
            <li>MLOps: experiment tracking, model serving, monitoring</li>
            <li>Visualization: Matplotlib, Seaborn, Plotly, dashboards</li>
            <li>Experimentation: A/B tests, power analysis, causal inference</li>
          </ul>
        </div>
      </main>
    </>
  );
}
