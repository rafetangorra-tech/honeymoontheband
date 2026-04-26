/**
 * Featured live clips on /music. Self-hosted MP4s for reliability —
 * Instagram's third-party embeds have become unreliable.
 *
 * To swap a clip, drop a new MP4 + JPG poster in public/videos/ and public/img/reels/
 * (matching ids), and update the entries here. Keep `igUrl` so visitors can
 * still jump to the original on Instagram if they want.
 */
export type FeaturedReel = {
  id: string;
  title?: string;
  igUrl: string;
};

export const FEATURED_REELS: FeaturedReel[] = [
  { id: 'DQmtgfoEXjs', igUrl: 'https://www.instagram.com/reel/DQmtgfoEXjs/' },
  { id: 'DMOGU4hyLuI', igUrl: 'https://www.instagram.com/reel/DMOGU4hyLuI/' },
  { id: 'DLHl-TjOL42', igUrl: 'https://www.instagram.com/reel/DLHl-TjOL42/' },
];
