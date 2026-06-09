import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fifaworldcup2026on.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://fifaworldcup2026on.vercel.app/matches",
      lastModified: new Date(),
    },
    {
      url: "https://fifaworldcup2026on.vercel.app/groups",
      lastModified: new Date(),
    },
  ];
}