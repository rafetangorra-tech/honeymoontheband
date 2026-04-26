export type FaqItem = { q: string; a: string; category?: string };

export const FAQ: FaqItem[] = [
  // --- About the band ---
  {
    category: 'About',
    q: 'What is Honeymoon?',
    a: 'Honeymoon is a six-piece live band based in the New York Tristate Area. We perform at weddings, private events, and corporate parties across NYC, Long Island, and Westchester.',
  },
  {
    category: 'About',
    q: "Who's in the band?",
    a: 'Honeymoon\'s lineup is Nick Tangorra (lead vocals), Alexandra Mendes (lead vocals), Marc Lambert (guitar), Frank Buffolino (keys), Pete Averso (bass), and Rafe Tangorra (drums).',
  },
  {
    category: 'About',
    q: 'Where do you perform?',
    a: 'We are based in the New York Tristate Area and regularly play across New York City (all five boroughs), Long Island (Nassau and Suffolk Counties), and Westchester County. Travel to Connecticut, New Jersey, the Hamptons, and beyond is available on request.',
  },
  {
    category: 'About',
    q: 'What kind of music do you play?',
    a: 'Modern pop, Motown, soul, funk, disco, classic rock, 2000s throwbacks, country, Latin, and ballads for ceremony and first-dance moments. Our full song list is published on the site and updated regularly.',
  },

  // --- Booking & pricing ---
  {
    category: 'Booking',
    q: 'How much does Honeymoon cost?',
    a: 'Pricing depends on configuration, date, location, and event scope. We send a custom quote for every inquiry. Email honeymoonbandbookings@gmail.com with your date, venue, and configuration.',
  },
  {
    category: 'Booking',
    q: 'How far in advance should I book?',
    a: 'For wedding-season dates (May through October), 6 to 12 months in advance is typical. Off-peak dates and weekday events can sometimes accommodate shorter timelines. Reach out as soon as you have a date in mind.',
  },
  {
    category: 'Booking',
    q: 'How do I book Honeymoon?',
    a: 'Email honeymoonbandbookings@gmail.com with your event date, venue, configuration, and any details you would like to share. We will reply with availability and pricing, then send a contract and collect a deposit to lock the date.',
  },
  {
    category: 'Booking',
    q: 'Do you require a deposit?',
    a: 'Yes. A signed contract and a deposit hold your date. The remaining balance is due before the event.',
  },
  {
    category: 'Booking',
    q: 'What configurations do you offer?',
    a: 'Three: a standard 6-piece, an extended lineup with added horn players, and a band + DJ hybrid that pairs live performance with DJ transitions for extended dance sets.',
  },

  // --- Logistics ---
  {
    category: 'Logistics',
    q: 'Can you play our ceremony, cocktail hour, and reception?',
    a: 'Yes. Honeymoon is set up to cover the full event arc — ceremony, cocktail hour, reception, and late-night sets — or just the reception. We coordinate timing and song choices for each segment with you ahead of the event.',
  },
  {
    category: 'Logistics',
    q: 'How long are your sets and how often do you take breaks?',
    a: 'A typical reception is four hours of live music, structured around the night\'s flow (entrances, dinner, dances, open dancing). Breaks are timed so guests barely notice them — we coordinate with your DJ or our own playlist to keep the room going.',
  },
  {
    category: 'Logistics',
    q: 'Do you provide sound and lighting?',
    a: 'We bring full professional PA appropriate for the event size. Lighting is venue-dependent — many venues prefer their own house lighting; for venues without it we coordinate or recommend a lighting partner.',
  },
  {
    category: 'Logistics',
    q: 'How much space do you need to set up?',
    a: 'For a 6-piece live show, a stage or open floor area roughly 20 feet wide by 12 feet deep is comfortable. We can fit smaller spaces and we can scale up for larger stages with horns.',
  },
  {
    category: 'Logistics',
    q: 'How long does setup and breakdown take?',
    a: 'Plan on roughly 90 minutes for setup and sound check, and about 60 minutes for breakdown. We coordinate with your venue to fit cleanly into your run-of-show.',
  },
  {
    category: 'Logistics',
    q: 'What time should the band start playing at a wedding reception?',
    a: 'Most weddings have us play live during the reception — starting after introductions, through dinner with lighter material, and ramping into the high-energy dance sets after toasts and key dances. We help you plan the exact timeline.',
  },
  {
    category: 'Logistics',
    q: 'Do you play between sets, or is there silence?',
    a: 'There is never silence. During short breaks we play curated music that matches the room\'s energy, or coordinate with your DJ if you have one. The dance floor stays moving the entire night.',
  },

  // --- Music & customization ---
  {
    category: 'Music',
    q: 'Do you take song requests?',
    a: 'Yes. Send your must-play list with your booking and we will work it into the show. You can also send a do-not-play list — songs you specifically want avoided.',
  },
  {
    category: 'Music',
    q: 'Can you learn a new song for our event?',
    a: 'Yes. We are happy to learn new songs for clients when there is time before the event — typically your first dance, parent dances, or a meaningful song you want during the night. Send the title, artist, and version you want and we will let you know what is feasible.',
  },
  {
    category: 'Music',
    q: 'Can you play our ceremony processional and recessional?',
    a: 'Yes. We provide live ceremony music — processionals, recessionals, prelude music, and any specific songs you want for key moments. We work with your officiant and planner to time everything precisely.',
  },
  {
    category: 'Music',
    q: 'Can we hear or see Honeymoon live before booking?',
    a: 'Most of our current live media lives on Instagram. Follow @honeymoon_theband for recent reels, performance clips, and behind-the-scenes from real weddings and events.',
  },
  {
    category: 'Music',
    q: 'What songs do you play for first dances?',
    a: 'Our most-requested first dances include "Can\'t Help Falling in Love" (Elvis), "Tennessee Whiskey" (Chris Stapleton), "Best Part" (Daniel Caesar & H.E.R.), "If I Ain\'t Got You" (Alicia Keys), and "Stand by Me" (Ben E. King). We tailor the arrangement to your moment, and we will learn a new song for your first dance if it isn\'t already in our book.',
  },

  // --- Logistics: contracts, cancellation, attire ---
  {
    category: 'Policies',
    q: 'What does the band wear?',
    a: 'Our default is sharp, event-appropriate attire — typically all-black or coordinated formal wear. For black-tie events we wear black tie. If your event has a specific dress code, just let us know.',
  },
  {
    category: 'Policies',
    q: 'What if our event runs over the contracted time?',
    a: 'Overtime is available on the day at a per-hour rate quoted in your contract. Most overtime is decided in the moment when the dance floor demands it.',
  },
  {
    category: 'Policies',
    q: 'What is your cancellation policy?',
    a: 'Cancellation terms are spelled out in your contract. Deposits are typically non-refundable but transferable to a future date when possible. We work with clients on case-by-case situations.',
  },
];
