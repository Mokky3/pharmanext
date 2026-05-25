import type { MetadataRoute } from "next";

const BASE_URL = "https://pharmanext.uz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/programs",
    "/focus",
    "/startups",
    "/apply",
    "/contact",
  ];
  const now = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
