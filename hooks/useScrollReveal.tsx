import { useState, useEffect } from 'react';

let ScrollReveal: any;
if (typeof window !== 'undefined') {
  ScrollReveal = require('scrollreveal');
}

export default function useScrollReveal() {
  const [sr, setSR] = useState<scrollReveal.ScrollRevealObject | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('scrollreveal').then((ScrollReveal) => {
        setSR(ScrollReveal.default());
      });
    }
  }, []);

  return sr;
}
