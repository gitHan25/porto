import Image from "next/image";
import { asset } from "@/lib/placeholder";
import Prompt from "./Prompt";

export function SectionHead({ id, title, lede, cmd }: { id?: string; title: string; lede?: string; cmd?: string }) {
  return (
    <header className="flex max-w-[var(--measure)] flex-col gap-4">
      {cmd && <Prompt command={cmd} />}
      <h2 id={id} className="text-[clamp(2rem,4.2vw,3.25rem)]">
        {title}
      </h2>
      {lede && <p className="text-[1.125rem] text-muted">{lede}</p>}
    </header>
  );
}

export interface Media {
  src: string;
  alt: string;
  kind?: "image" | "video";
}

export interface Shot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Project screenshots at their real proportions, never cropped. Portrait shots (phone screens) share
 * one row at equal height; landscape shots stack. Below the fold, so they load lazily.
 */
export function MediaGallery({ shots }: { shots: Shot[] }) {
  const row = shots.every((s) => s.height > s.width);
  return (
    <div className={row ? "shots shots-row" : "shots"}>
      {shots.map((s) => (
        <div key={s.src} className="shot" style={row ? { flex: `${s.width / s.height} 1 0` } : undefined}>
          <Image src={asset(s.src)} alt={s.alt} width={s.width} height={s.height} sizes="(min-width: 1024px) 45vw, 100vw" className="h-auto w-full" />
        </div>
      ))}
    </div>
  );
}

/**
 * A framed image or looping clip. With no `media` it renders a labelled
 * placeholder so the layout is already final when real files arrive.
 */
export function MediaSlot({
  media,
  label,
  ratio,
}: {
  media?: Media | null;
  label: string; // shown inside the placeholder, e.g. "screenshot 16:9"
  ratio: string; // CSS aspect-ratio, e.g. "16 / 9"
}) {
  if (!media) {
    return (
      <div className="media-slot" style={{ aspectRatio: ratio }} role="img" aria-label={`Placeholder: ${label}`}>
        <span className="media-slot-label">
          {label}
          <span className="block text-subtle">placeholder - set media in /content</span>
        </span>
      </div>
    );
  }
  return (
    <div className="media-slot" style={{ aspectRatio: ratio }}>
      {media.kind === "video" ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={asset(media.src)}
          aria-label={media.alt}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <Image
          src={asset(media.src)}
          alt={media.alt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      )}
    </div>
  );
}
