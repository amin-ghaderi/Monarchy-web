/**
 * Lazy GSAP loader for future homepage/history sprints.
 * Do not import gsap directly in route modules — use loadGsap().
 */

export type GsapModule = typeof import("gsap");
export type ScrollTriggerModule = typeof import("gsap/ScrollTrigger");

let gsapPromise: Promise<GsapModule["gsap"]> | null = null;

export async function loadGsap(): Promise<GsapModule["gsap"]> {
  if (!gsapPromise) {
    gsapPromise = import("gsap").then((mod) => mod.gsap);
  }
  return gsapPromise;
}

export async function loadScrollTrigger(): Promise<ScrollTriggerModule["ScrollTrigger"]> {
  const gsap = await loadGsap();
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
  return ScrollTrigger;
}

export function resetGsapLoaderForTests() {
  gsapPromise = null;
}
