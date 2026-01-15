import type { Metadata } from "next";

export const SITE_NAME = "One Answers";
export const DEFAULT_TITLE = "One Answers - Exam Preparation Made Easy";
export const DEFAULT_DESCRIPTION =
  "Access syllabus, question papers, and notes for your university courses. Your trusted portal for exam preparation.";

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";
}

export function absoluteUrl(pathname: string): URL {
  const base = getSiteUrl();
  return new URL(pathname.startsWith("/") ? pathname : `/${pathname}`, base);
}

export function buildPageMetadata(params: {
  title: string;
  description?: string;
  pathname: string;
}): Metadata {
  const description = params.description ?? DEFAULT_DESCRIPTION;
  const canonical = absoluteUrl(params.pathname);

  return {
    title: params.title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: params.title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description,
      images: ["/og-image.svg"],
    },
  };
}
