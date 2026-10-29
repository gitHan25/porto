import { ViewTransition } from "react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { ExtLink, Text } from "./Text";
import Reveal from "./Reveal";
import StackIcons from "./StackIcons";
import { MediaGallery, MediaSlot } from "./ui";

function Step({
  cls,
  label,
  children,
}: {
  cls: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`${cls} flex flex-col gap-2`}>
      <h4 className="step-label">{label}</h4>
      {children}
    </section>
  );
}

/** One project as a full-width chapter: story on one side, media on the other, alternating. */
export default function ProjectBand({
  project,
  index = 0,
  linkToPage = true,
  headingLevel = 3,
}: {
  project: Project;
  index?: number;
  linkToPage?: boolean;
  headingLevel?: 1 | 3;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h3";
  const flip = index % 2 === 1;
  return (
    <article
      id={project.slug}
      className={`scroll-mt-20 border-t border-border py-16 md:py-24 ${index % 2 === 0 ? "bg-surface" : ""}`}
    >
      <Reveal className="wrap grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={`flex flex-col gap-8 ${flip ? "lg:order-2" : ""}`}>
          <header className="flex flex-col gap-3">
            {/* Only the detail page (h1) pairs with the home-page row title, so the title morphs between them. */}
            <ViewTransition name={headingLevel === 1 ? `project-${project.slug}` : undefined} share="morph" default="none">
              <Heading className="text-[clamp(1.75rem,3.2vw,2.5rem)]">
                {project.title}
              </Heading>
            </ViewTransition>
            <p className="mono text-[0.875rem] text-muted">
              <Text>{String(project.year)}</Text> · {project.kind}
            </p>
          </header>

          <Step cls="step-problem" label="The problem">
            <p className="max-w-[var(--measure)]">
              <Text>{project.problem}</Text>
            </p>
          </Step>
          <Step cls="step-build" label="What I built">
            <ul className="flex max-w-[var(--measure)] flex-col gap-2.5">
              {project.built.map((b, n) => (
                <li key={n}>
                  <Text>{b}</Text>
                </li>
              ))}
            </ul>
          </Step>
          <Step cls="step-stack" label="The stack">
            <StackIcons items={project.stack} />
          </Step>
          <Step cls="step-result" label="The result">
            <ul className="flex max-w-[var(--measure)] flex-col gap-2.5">
              {project.result.map((r, n) => (
                <li key={n}>
                  <Text>{r}</Text>
                </li>
              ))}
            </ul>
          </Step>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {project.links.map((l) => (
              <li key={l.label}>
                <ExtLink href={l.href}>{l.label}</ExtLink>
              </li>
            ))}
            {linkToPage && (
              <li>
                <Link href={`/projects/${project.slug}/`}>
                  Open as its own page
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className={`flex flex-col gap-3 ${flip ? "lg:order-1" : ""}`}>
          {project.media?.length ? (
            <MediaGallery shots={project.media} />
          ) : (
            <MediaSlot label="screenshot 16:10" ratio="16 / 10" />
          )}
          <p className="mono text-[0.8125rem] text-subtle">
            {project.tags.join(" · ").toLowerCase()}
          </p>
        </div>
      </Reveal>
    </article>
  );
}
