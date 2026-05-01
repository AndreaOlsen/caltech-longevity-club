export interface Sponsor {
  name: string;
  src: string;
  enabled: boolean;
}

export const sponsors: Sponsor[] = [
  { name: "Brogevity", src: "/sponsors/brogevity.png", enabled: false },
  { name: "Caltech", src: "/sponsors/caltech.png", enabled: true },
  { name: "Insilico", src: "/sponsors/insilico.svg", enabled: true },
  { name: "LongevC", src: "/sponsors/longevc.svg", enabled: true },
  { name: "Longevity Pledge", src: "/sponsors/logo-white_Longevity.svg", enabled: true },
  { name: "Retro", src: "/sponsors/retrobio.png.webp", enabled: true },
  { name: "True Diagnostics", src: "/sponsors/truediagnostics.png", enabled: true },
  { name: "VitaDAO", src: "/sponsors/vitadao.jpg", enabled: true },
  { name: "Longgame", src: "/sponsors/longgame_white.png", enabled: true },
  { name: "Anthropic", src: "/sponsors/anthropic.svg", enabled: true },
  { name: "Calico", src: "/sponsors/calico.svg", enabled: true },
  { name: "Lovable", src: "/sponsors/lovable.svg", enabled: true },
  { name: "XYZ Ventures", src: "/sponsors/xyz-ventures.webp", enabled: true },
  { name: "That's it!", src: "/sponsors/thats-it.jpg", enabled: true },
  { name: "Aetas", src: "/sponsors/aetas.svg", enabled: true },
  { name: "GlycanAge", src: "/sponsors/glycanage.svg", enabled: true },
  { name: "Fastshot", src: "/sponsors/fastshot.svg", enabled: true },
];

export function getEnabledSponsors(): Sponsor[] {
  return sponsors.filter((s) => s.enabled);
}
