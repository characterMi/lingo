import { Manifest } from "next/dist/lib/metadata/types/manifest-types";

export default function manifest(): Manifest {
  return {
    name: "Lingo",
    short_name: "Lingo",
    description: "Lingo is an Advanced language learning application.",
    start_url: ".",
    orientation: "portrait-primary",
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
        src: "/d1.png",
        sizes: "1440x900",
        type: "image/png",
        // @ts-ignore
        form_factor: "wide",
      },
      {
        src: "/d2.png",
        sizes: "1440x900",
        type: "image/png",
        // @ts-ignore
        form_factor: "wide",
      },
      {
        src: "/d3.png",
        sizes: "1440x900",
        type: "image/png",
        // @ts-ignore
        form_factor: "wide",
      },
      {
        src: "/1.jpg",
        sizes: "1080x2262",
        type: "image/jpg",
      },
      {
        src: "/2.jpg",
        sizes: "1080x2251",
        type: "image/jpg",
      },
      {
        src: "/3.jpg",
        sizes: "1080x2250",
        type: "image/jpg",
      },
      {
        src: "/4.jpg",
        sizes: "1080x2249",
        type: "image/jpg",
      },
      {
        src: "/5.jpg",
        sizes: "1080x2260",
        type: "image/jpg",
      },
    ],
    shortcuts: [
      {
        name: "Start a Lesson",
        short_name: "Start a Lesson",
        description: "Start a Lesson",
        url: "/lesson",
        icons: [
          {
            src: "/lesson.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      {
        name: "Start a Course",
        short_name: "Start a Course",
        description: "Start a Course",
        url: "/courses",
        icons: [
          {
            src: "/course.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    ],
  };
}
