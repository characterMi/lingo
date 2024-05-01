import { Manifest } from "next/dist/lib/metadata/types/manifest-types";

export default function manifest(): Manifest {
  return {
    name: "Lingo",
    short_name: "Lingo",
    description: "Lingo is an Advanced language learning application.",
    start_url: ".",
    orientation: "portrait",
    theme_color: "#22c55e",
    display: "standalone",
    scope: ".",
    icons: [
      {
        src: "/mascot-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/mascot-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    background_color: "#ffffff",
    screenshots: [
      {
        src: "/lingo_first.png",
        sizes: "800x500",
        type: "image/png",
        // @ts-ignore
        form_factor: "wide",
      },
      {
        src: "/lingo_responsive.png",
        sizes: "381x831",
        type: "image/png",
      },
    ],
  };
}
