import { ViewTransition } from "react";
import Link from "next/link";
import type { ContactLink, Profile } from "@/content/profile";
import type { Experience } from "@/content/experience";
import type { Education } from "@/content/education";
import type { Project } from "@/content/projects";
import type { Publication } from "@/content/publications";
import type { SkillGroup } from "@/content/skills";
import { ExtLink, Text } from "./Text";
import Reveal from "./Reveal";
import { StackMarks } from "./StackIcons";
import { iconFor } from "@/lib/stack-icons";
import { isPlaceholder } from "@/lib/placeholder";
import { SOCIAL_ICONS } from "@/lib/social-icons";
import CopyButton from "./CopyButton";
import { SectionHead } from "./ui";

/** The projects on the home page: one large row each, linking to the full story on its own page. */
export function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="wrap flex scroll-mt-20 flex-col gap-10 pt-16 pb-16 md:pt-20 md:pb-20">
      <SectionHead
        cmd="cd projects"
        title="What I've built"
        lede="Open any project for the problem, what I built, the stack and the result."
      />
      <Reveal>
        <ul className="pj-list">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}/`} className="pj-row">
                <span className="pj-head">
                  <ViewTransition name={`project-${p.slug}`} share="morph" default="none">
                    <h3 className="pj-title">{p.title}</h3>
                  </ViewTransition>
                  <span className="pj-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </span>
                <span className="pj-under">
                  <span className="pj-copy">
                    <span className="pj-kind">
                      <Text>{String(p.year)}</Text> · {p.kind}
                    </span>
                    <p className="pj-proof">{p.summary}</p>
                  </span>
                  <StackMarks items={p.stack} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

function Dated({
  period,
  children,
}: {
  period: string;
  children: React.ReactNode;
}) {
  return (
    <article className="grid gap-2 border-t border-border pt-6 md:grid-cols-[13rem_1fr] md:gap-10">
      <p className="mono pt-1 text-[0.875rem] text-muted">{period}</p>
      <div className="flex max-w-[var(--measure)] flex-col gap-3">{children}</div>
    </article>
  );
}

export function PathSection({
  education,
  experience,
}: {
  education: Education[];
  experience: Experience[];
}) {
  if (!education.length && !experience.length) return null;
  return (
    <section
      id="path"
      className="wrap flex scroll-mt-20 flex-col gap-12 pt-4 pb-8 md:pt-8 md:pb-12"
    >
      <SectionHead
        cmd="cd path"
        title="How I got here"
        lede="A degree in Informatics, then the lab where I taught it, and an internship on a public data platform."
      />
      <Reveal className="flex flex-col gap-10">
        {education.map((e) => (
          <Dated key={e.slug} period={e.period}>
            <h3 className="text-[1.375rem]">
              {e.degree}, {e.school}
            </h3>
            <p className="text-muted">
              {e.location} · GPA {e.gpa}
            </p>
            <p>
              Thesis: {e.thesis}. Supervised by {e.supervisors}
            </p>
            <p className="text-muted">Coursework: {e.coursework.join(" · ")}</p>
          </Dated>
        ))}
        {experience.map((x) => (
          <Dated key={x.slug} period={x.period}>
            <h3 className="text-[1.375rem]">{x.role}</h3>
            <p className="text-muted">
              {x.org} · {x.location} · {x.type}
            </p>
            <p>
              <Text>{x.summary}</Text>
            </p>
            {x.tech && x.tech.length > 0 && <StackMarks items={x.tech} />}
          </Dated>
        ))}
      </Reveal>
    </section>
  );
}

export function ToolboxSection({ skills }: { skills: SkillGroup[] }) {
  if (!skills.length) return null;
  return (
    <section id="toolbox" className="wrap flex scroll-mt-20 flex-col gap-10 pb-16 md:pb-20">
      <SectionHead cmd="cd toolbox" title="What I work with" />
      <Reveal>
        <dl className="tb-list">
          {skills.map((g) => (
            <div key={g.group} className="tb-group">
              <dt>{g.group}</dt>
              <dd>
                <ul className="tb-inline" aria-label={g.group}>
                  {g.items.map((name) => {
                    const icon = iconFor(name);
                    return (
                      <li key={name}>
                        {icon && (
                          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d={icon.path} />
                          </svg>
                        )}
                        <Text>{name}</Text>
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

/** The reference in IEEE style, built from the publication fields. */
const citation = (p: Publication) =>
  `${p.authors}, “${p.title},” in ${p.venue}, ${p.year}, pp. ${p.pages}, doi: ${p.doi}.`;

export function PublicationSection({ items }: { items: Publication[] }) {
  if (!items.length) return null;
  return (
    <section id="publication" className="wrap flex scroll-mt-20 flex-col gap-10 pb-20 md:pb-24">
      <SectionHead cmd="cd publication" title="What I published" lede="The thesis work became a conference paper." />
      {items.map((p) => (
        <article key={p.slug} className="pub">
          <h3 className="pub-title">{p.title}</h3>
          <p className="pub-cite">{citation(p)}</p>
          <div className="pub-actions">
            <CopyButton text={citation(p)} label="Copy citation" announce="Citation copied to clipboard" />
            <CopyButton text={p.bibtex} label="Copy BibTeX" announce="BibTeX copied to clipboard" />
            <p>
              <ExtLink href={p.link}>paper</ExtLink>
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

export function ContactSection({
  profile,
  links,
}: {
  profile: Profile;
  links: ContactLink[];
}) {
  return (
    <section id="contact" className="wrap flex scroll-mt-20 flex-col gap-10 pb-16">
      <SectionHead cmd="cd contact" title="Let's talk" lede={profile.availability} />
      <div className="ct-actions">
        <a className="btn btn-solid" href={`mailto:${profile.email}`}>
          Email me
        </a>
        <CopyButton text={profile.email} label="Copy address" announce="Email address copied to clipboard" />
        <span className="mono ct-address">{profile.email}</span>
      </div>
      <ul className="ct-social" aria-label="Profiles">
        {links
          .filter((l) => l.label !== "email")
          .map((l) => {
            const icon = SOCIAL_ICONS[l.label];
            if (!icon || isPlaceholder(l.href)) {
              return (
                <li key={l.label}>
                  <ExtLink href={l.href}>{l.label}</ExtLink>
                </li>
              );
            }
            return (
              <li key={l.label}>
                <a
                  className="ct-icon"
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${icon.title} (opens in a new tab)`}
                  title={icon.title}
                >
                  <svg viewBox={icon.viewBox ?? "0 0 24 24"} fill="currentColor" fillRule="evenodd" aria-hidden="true">
                    <path d={icon.path} />
                  </svg>
                </a>
              </li>
            );
          })}
      </ul>
      <p className="ct-foot mono">
        <span>{profile.location}</span>
        <Link href="/">back to top</Link>
      </p>
    </section>
  );
}
