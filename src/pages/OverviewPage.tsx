import {
  Zap,
  MessageSquare,
  TrendingUp,
  Clock,
  Star,
  ArrowRight,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useReviewGenerator } from "../hooks/useReviewGenerator"; // We'll reuse this or create a new hook for stats if needed

export default function OverviewPage() {
  // In a real app, we'd fetch stats here. For now, we mock or use derived state.
  const stats = [
    {
      label: "Replies Generated",
      value: "1,284",
      icon: MessageSquare,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      label: "Time Saved",
      value: "42 hrs",
      icon: Clock,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      label: "Avg Rating",
      value: "4.9",
      icon: Star,
      color: "text-yellow-500",
      bg: "bg-yellow-50",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-slate-500">
            Welcome back! Here's what's happening today.
          </p>
        </div>
        <Link
          to="/dashboard/generate"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-5 rounded-xl transition-all shadow-lg shadow-emerald-200"
        >
          <Plus className="w-5 h-5" /> New Reply
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className={`p-4 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity / Quick Actions Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Quick Start Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Ready to reply?</h3>
            <p className="text-slate-300 mb-6 max-w-sm">
              Paste a new Google Review to generate a professional response in
              seconds.
            </p>
            <Link
              to="/dashboard/generate"
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold py-2 px-4 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Go to Generator <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Decorative Orb */}
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Recent Updates / News */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" /> Latest Updates
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0">
              <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  New Documentation Portal
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  We've completely overhauled our docs. Check out the new
                  guides.
                </p>
                <Link
                  to="/dashboard/docs"
                  className="text-xs font-bold text-emerald-600 hover:underline mt-2 inline-block"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Settings Redesign
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Manage your profile and preferences with our new settings
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
