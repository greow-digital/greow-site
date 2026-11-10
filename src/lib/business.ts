// ── Business identity (NAP) ──────────────────────────────────────────────────
// Single source for name, address and map links. Used by the footer and the
// JSON-LD graph so the address is always written identically — local search
// matches this against the Google Business Profile, character for character.

export const business = {
  name: 'Greow',
  legalName: 'Greow Digital',
  streetAddress: 'Riddersviksvägen 161',
  postalCode: '165 72',
  locality: 'Hässelby',
  region: 'Stockholms län',
  country: 'SE',
  countryName: { en: 'Sweden', sv: 'Sverige' },
}

export const businessAddressLine = `${business.streetAddress}, ${business.postalCode} ${business.locality}`

const mapQuery = encodeURIComponent(`${business.streetAddress}, ${business.postalCode} ${business.locality}, Sweden`)

// Opens the location in Google Maps. Replace with the Google Business Profile
// share link once the profile is verified, so the link points at the listing.
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

// Keyless Google Maps embed, loaded only after the visitor asks for it.
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`

export const postalAddressSchema = {
  '@type': 'PostalAddress',
  streetAddress: business.streetAddress,
  postalCode: business.postalCode,
  addressLocality: business.locality,
  addressRegion: business.region,
  addressCountry: business.country,
}

// Public profiles for schema.org `sameAs`. Add only real, verified URLs
// (e.g. LinkedIn). Left empty on purpose — nothing is guessed.
export const profiles: { organization: string[]; person: string[] } = {
  organization: [],
  person: ['https://www.linkedin.com/in/erwerner'],
}
