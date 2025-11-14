import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Работа в такси",
    short_name: "Работа в такси",
    description:
      "Работа водителем такси с выгодными условиями: 40% от кассы, предоставляем авто",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#fbbf24",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
