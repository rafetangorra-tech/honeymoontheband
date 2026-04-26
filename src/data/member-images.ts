import type { ImageMetadata } from 'astro';

import nick from '../../assets/photos/members/nick.png';
import alex from '../../assets/photos/members/alex.jpg';
import marc from '../../assets/photos/members/marc.jpg';
import frank from '../../assets/photos/members/frank.jpg';
import pete from '../../assets/photos/members/pete.jpg';
import rafe from '../../assets/photos/members/rafe.jpg';

export const memberImages: Record<string, ImageMetadata> = {
  'nick-tangorra': nick,
  'alexandra-mendes': alex,
  'marc-lambert': marc,
  'frank-buffolino': frank,
  'pete-averso': pete,
  'rafe-tangorra': rafe,
};
