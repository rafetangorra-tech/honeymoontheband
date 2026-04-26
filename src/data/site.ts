// SITE.url is sourced from PUBLIC_SITE_URL when set (preview / production deploys),
// otherwise falls back based on whether the build uses the /honeymoontheband/ base path.
const useBasePath = import.meta.env.BASE_URL !== '/';
const envSiteUrl = import.meta.env.PUBLIC_SITE_URL as string | undefined;
const fallbackUrl = useBasePath
  ? 'https://rafetangorra-tech.github.io/honeymoontheband'
  : 'https://www.honeymoontheband.com';

export const SITE = {
  name: 'Honeymoon',
  fullName: 'Honeymoon the Band',
  tagline: 'Live wedding & event band — NYC · Long Island · Westchester',
  url: envSiteUrl || fallbackUrl,
  email: 'honeymoonbandbookings@gmail.com',
  defaultDescription:
    'Honeymoon is a six-piece live band serving weddings and private events across the New York Tristate Area.',
  socials: {
    instagram: 'https://www.instagram.com/honeymoon_theband',
    facebook: 'https://www.facebook.com/TheBandHoneymoon',
  },
  igHandle: '@honeymoon_theband',
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/band', label: 'The Band' },
  { href: '/song-list', label: 'Song List' },
  { href: '/how-we-work', label: 'How We Work' },
  { href: '/faq', label: 'FAQ' },
  { href: '/booking', label: 'Booking' },
] as const;

export const SERVICE_AREAS = [
  'New York City',
  'Long Island (Nassau & Suffolk)',
  'Westchester County',
  'Connecticut & New Jersey on request',
] as const;

export const CONFIGURATIONS = [
  {
    name: 'Standard 6-piece',
    summary:
      'Two lead vocalists, guitar, keys, bass, and drums. Our core lineup — full sound, deep song list.',
  },
  {
    name: 'Extended (with horns)',
    summary:
      'Our 6-piece plus horn players for a fuller, brassier sound. Built for Motown, funk, and disco-leaning sets.',
  },
  {
    name: 'Band + DJ hybrid',
    summary:
      'Live band integrated with a DJ for seamless transitions and extended dance sets. No gaps, no breaks in momentum.',
  },
] as const;

export const bookingMailto = (subject = 'Honeymoon Booking Inquiry') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
