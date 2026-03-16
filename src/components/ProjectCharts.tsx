"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const ACCENT = "#0d9488";
const SLATE = "#64748b";

type ChartProps = { data: unknown[]; title?: string };

export function ROCChart({ data, title }: ChartProps) {
  const d = data as { fpr: number; tpr_baseline: number; tpr_model: number }[];
  return (
    <div className="my-8">
      {title && <h4 className="text-sm font-medium text-slate-700 mb-2">{title}</h4>}
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={d} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="fpr" type="number" domain={[0, 1]} tick={{ fontSize: 12 }} />
          <YAxis type="number" domain={[0, 1]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="tpr_baseline" name="Baseline" stroke={SLATE} strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="tpr_model" name="XGBoost" stroke={ACCENT} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BarChartHorizontal({ data, title }: ChartProps) {
  const d = data as { name: string; value: number }[];
  return (
    <div className="my-8">
      {title && <h4 className="text-sm font-medium text-slate-700 mb-2">{title}</h4>}
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={d} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="name" width={70} tick={{ fontSize: 11 }} />
          <Tooltip />
          <Bar dataKey="value" fill={ACCENT} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ForecastChart({ data, title }: ChartProps) {
  const d = data as { day: number; actual: number; forecast: number }[];
  return (
    <div className="my-8">
      {title && <h4 className="text-sm font-medium text-slate-700 mb-2">{title}</h4>}
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={d} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="actual" name="Actual" stroke={SLATE} strokeWidth={2} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="forecast" name="Forecast" stroke={ACCENT} strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function HRChart({ data, title }: ChartProps) {
  const d = data as { K: number; HR: number }[];
  return (
    <div className="my-8">
      {title && <h4 className="text-sm font-medium text-slate-700 mb-2">{title}</h4>}
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={d} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="K" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="HR" fill={ACCENT} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ConversionChart({ data, title }: ChartProps) {
  const d = data as { arm: string; rate: number; lo: number; hi: number }[];
  return (
    <div className="my-8">
      {title && <h4 className="text-sm font-medium text-slate-700 mb-2">{title}</h4>}
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={d} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="arm" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="rate" fill={ACCENT} radius={[4, 4, 0, 0]}>
            {d.map((_, i) => (
              <Cell key={i} fill={i === 0 ? SLATE : ACCENT} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ScoreDistChart({ data, title }: ChartProps) {
  const d = data as { bucket: string; normal: number; anomaly: number }[];
  return (
    <div className="my-8">
      {title && <h4 className="text-sm font-medium text-slate-700 mb-2">{title}</h4>}
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={d} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="bucket" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="normal" name="Normal" fill={SLATE} stackId="a" radius={[0, 0, 0, 0]} />
          <Bar dataKey="anomaly" name="Anomaly" fill="#dc2626" stackId="a" radius={[0, 0, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
