import Image from "next/image";
import Link from "next/link";
import type { About } from "@/content/about";
import type { Profile } from "@/content/profile";
import { asset } from "@/lib/placeholder";
import { Text } from "./Text";
import Typed from "./Typed";

/** Delay in ms for the fade-in (see the intro timeline in globals.css). */
const after = (ms: number) => ({ ["--d" as string]: ms });

export default function Hero({
  profile,
  about,
  hasProjects,
}: {
  profile: Profile;
  about: About;
  hasProjects: boolean;
}) {
  return (
    <section className="wrap hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <Typed name={profile.name} role={profile.title} lede={about.headline} />
        <div className="hero-in hero-prose" style={after(3300)}>
          <p>{about.body}</p>
          <p>
            <Text>{about.personal}</Text>
          </p>
        </div>
        <div className="hero-in hero-actions" style={after(3700)}>
          {hasProjects && (
            <Link className="btn btn-solid" href="/#projects">
              See projects
            </Link>
          )}
          <a className="btn" href={asset(profile.cv)} download>
            Download CV
          </a>
        </div>
        <p className="hero-in hero-status mono" style={after(4000)}>
          <span className="badge-dot" aria-hidden="true" />
          {profile.status}
        </p>
      </div>

      <figure className="hero-fig">
        <div className="hero-portrait">
          {profile.portrait ? (
            <Image
              src={asset(profile.portrait.src)}
              alt={profile.portrait.alt}
              fill
              priority
              sizes="(min-width: 1024px) 22rem, 80vw"
              className="object-cover"
            />
          ) : (
            <div className="media-slot h-full" role="img" aria-label="Placeholder: portrait">
              <span className="media-slot-label">portrait</span>
            </div>
          )}
        </div>
      </figure>
    </section>
  );
}
