import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectBand from "@/components/ProjectBand";
import TopBar from "@/components/TopBar";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    // Setting openGraph here replaces the root one, so the preview image has to be repeated.
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // One plain wrapper: Next scrolls the first element of a new page into view, and the sticky TopBar
  // would make that land mid-page (hiding the title) after a click from further down the home page.
  return (
    <div>
      <TopBar
        profile={profile}
        links={[
          { href: "/#projects", label: "All projects" },
          { href: "/#contact", label: "Contact" },
        ]}
      />
      <main id="main">
        <ProjectBand project={project} linkToPage={false} headingLevel={1} />
      </main>
    </div>
  );
}
