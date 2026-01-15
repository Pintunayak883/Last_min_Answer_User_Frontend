"use client";

import React from "react";
import { Mail, Lightbulb, Target, Users, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Pintu",
      role: "Developer & Full-Stack Engineer",
      description:
        "Building and maintaining the entire application infrastructure",
      email: "pintunayak5642@gmail.com",
    },
    {
      name: "Bhanwer",
      role: "Founder & Project Lead",
      description: "Conceptualized and drove the vision of One Answers",
      email: "bhanwarnayak777@gmail.com",
    },
  ];

  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About One Answers
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Your trusted portel for exam preparation. Access syllabus, question
            papers, and notes anytime, anywhere.
          </p>
        </div>

        {/* Vision Section */}
        <section className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <Lightbulb className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Our Vision
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To empower students with instant access to comprehensive study
                materials, enabling them to ace their exams with confidence. We
                believe that quality education resources should be accessible to
                everyone, without barriers or delays.
              </p>
            </div>
          </div>
        </section>

        {/* Scope & Objectives */}
        <section className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <Target className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Project Scope
              </h2>
              <div className="space-y-3 text-slate-600 dark:text-slate-300">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Core Features:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Browse universities, courses, and subjects</li>
                    <li>
                      Access syllabus documents for comprehensive course
                      overview
                    </li>
                    <li>Download previous year question papers for practice</li>
                    <li>Study notes organized by units and topics</li>
                    <li>User-friendly PDF viewer for document preview</li>
                    <li>Responsive design for desktop and mobile devices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Target Users:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>College and university students</li>
                    <li>Exam aspirants preparing for final assessments</li>
                    <li>Self-learners seeking structured study materials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <div className="flex items-start gap-4 mb-8">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Our Team
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                A passionate team dedicated to making exam preparation
                accessible and hassle-free.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {member.description}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  <Mail size={16} />
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Feedback Section */}
        <section className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                <MessageCircle className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Your Feedback Matters
              </h2>
              <p className="text-slate-400 mb-4">
                Your opinions and suggestions are important to us. They help us
                improve and provide better service to all students. Whether it's
                a feature request, bug report, or general feedback, we'd love to
                hear from you!
              </p>
              <p className="text-slate-400 mb-4">
                We're committed to continuously evolving One Answers based on
                your needs and experiences. Your voice shapes the future of this
                platform.
              </p>
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Have feedback?</span> Send us
                  an email at{" "}
                  <a
                    href="mailto:boynayak31@gmail.com"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    boynayak31@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Email
              </h3>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Mail
                  size={18}
                  className="text-primary-600 dark:text-primary-400"
                />
                <a
                  href="mailto:boynayak31@gmail.com"
                  className="hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                >
                  boynayak31@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                For General Inquiries
              </h3>
              <a
                href="mailto:boynayak31@gmail.com"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium inline-flex items-center gap-2"
              >
                <Mail size={18} />
                boynayak31@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* Closing Message */}
        <section className="mt-12 text-center">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            "Education is the most powerful weapon which you can use to change
            the world."
          </p>
          <p className="text-slate-500 dark:text-slate-400 italic">
            Thank you for being part of the One Answers community. Happy
            learning! 🎓
          </p>
        </section>
      </div>
    </div>
  );
}
