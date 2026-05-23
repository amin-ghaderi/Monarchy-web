import { GeometryField } from "@/components/visual/geometry-field";

/**
 * Hero atmosphere — CSS grain/contours + structural geometry (homepage prologue only).
 */
export function HomeHeroAtmosphere() {
  return (
    <>
      <GeometryField variant="hero" />
      <div className="ac-hero-atmosphere" aria-hidden>
        <div className="ac-hero-grain" />
        <div className="ac-hero-contours" />
        <div className="ac-hero-geometry" />
      </div>
    </>
  );
}
