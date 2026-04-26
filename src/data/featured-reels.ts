/**
 * Featured Instagram reels for /music. To swap a reel, replace its `id` with
 * the segment from the IG URL: instagram.com/reel/<id>/.
 */
export type FeaturedReel = {
  id: string;
  caption?: string;
};

export const FEATURED_REELS: FeaturedReel[] = [
  { id: 'DQmtgfoEXjs' },
  { id: 'DMOGU4hyLuI' },
  { id: 'DLHl-TjOL42' },
];
