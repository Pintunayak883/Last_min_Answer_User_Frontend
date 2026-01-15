import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  FileText,
  Download,
  Search,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  description:
    "Access syllabus, question papers, and notes for your university courses. Fast, free, and mobile-friendly exam preparation.",
};

export default function HomePage() {
  const features = [
    {
      icon: <Search size={32} />,
      title: "Easy Discovery",
      description:
        "Browse universities, courses, and subjects with intuitive navigation",
    },
    {
      icon: <Download size={32} />,
      title: "Quick Downloads",
      description: "Download syllabus, question papers, and notes instantly",
    },
    {
      icon: <Zap size={32} />,
      title: "Fast & Mobile-First",
      description:
        "Optimized for mobile devices with lightning-fast performance",
    },
    {
      icon: <Shield size={32} />,
      title: "Always Available",
      description:
        "Access your study materials anytime, anywhere, on any device",
    },
  ];

  const resources = [
    {
      icon: <BookOpen size={24} />,
      title: "Syllabus",
      description: "Complete course curriculum and outlines",
    },
    {
      icon: <FileText size={24} />,
      title: "Question Papers",
      description: "Previous year exam papers with solutions",
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Notes",
      description: "Comprehensive study notes by unit and topic",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-slate-800 dark:via-slate-900 dark:to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Exam Preparation Made Easy
            </h1>
            <p className="text-lg md:text-xl text-primary-100 dark:text-slate-300 mb-8 leading-relaxed">
              Access syllabus, question papers, and notes for your university
              courses. Everything you need, right at your fingertips.
            </p>
            <Link href="/universities">
              <Button size="lg" variant="secondary" className="gap-2">
                Explore Universities
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose One Answers?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We make exam preparation simple, accessible, and effective for
              students everywhere
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Study Resources
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Everything you need to ace your exams in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Preparing?
          </h2>
          <p className="text-lg text-primary-100 dark:text-slate-300 mb-8">
            Browse our collection of universities and find your study materials
          </p>
          <Link href="/universities">
            <Button size="lg" variant="secondary" className="gap-2">
              Get Started Now
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
