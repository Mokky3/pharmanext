// Shared external links and contact details used across the site.

export const CONTACT = {
  email: "info@pharmanext.uz",
  phone: "+998 71 200 00 00",
  // Yandex Maps share link for the office location.
  mapUrl: "https://yandex.uz/maps/-/CDtFn6-9",
  // Resolved coordinates of the office marker (Zangiota district, Tashkent region).
  lat: 41.179079,
  lng: 69.200089,
};

export const SOCIAL = {
  telegram: "https://t.me/pharma_next",
  linkedin: "#",
};

export const LEGAL = {
  offer: "https://uzpharmagency.uz/en/offerta",
  privacy: "https://uzpharmagency.uz/en/privacy",
  wwwUz: "https://www.uz",
  siteMap: "/sitemap.xml",
};

// OpenStreetMap embed URL centered on the office, with a marker pin.
export function osmEmbedUrl(lat = CONTACT.lat, lng = CONTACT.lng): string {
  const dLng = 0.012;
  const dLat = 0.006;
  const bbox = [lng - dLng, lat - dLat, lng + dLng, lat + dLat]
    .map((n) => n.toFixed(6))
    .join("%2C");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
}
