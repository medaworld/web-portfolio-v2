import { Roboto, Roboto_Slab, Raleway } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '700'],
});

export const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: '700',
});

export const raleway = Raleway({
  subsets: ['latin'],
  weight: '500',
});
