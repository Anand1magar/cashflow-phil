import React from 'react';
import { FLOW } from './flow.js';

/* Hash routing keeps the prototype dependency-free and shareable:
 * #/welcome, #/payment, ... and #/2 style indexes still work.
 * Swap this for the host app's router when the screens are lifted out. */
function indexFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  if (!raw) return 0;
  const bySlug = FLOW.findIndex((s) => s.slug === raw);
  if (bySlug >= 0) return bySlug;
  const n = parseInt(raw, 10);
  return Number.isInteger(n) && n >= 1 && n <= FLOW.length ? n - 1 : 0;
}

export default function App() {
  const [i, setI] = React.useState(indexFromHash);

  React.useEffect(() => {
    const onHash = () => setI(indexFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  /* Forward past the last screen wraps to the first, so the prototype can be
     walked end to end repeatedly during review. Back from the first is a no-op.
     A real implementation would submit here instead — see DECISIONS.md. */
  const go = (next) => {
    if (next < 0) return;
    const target = next >= FLOW.length ? 0 : next;
    window.location.hash = `#/${FLOW[target].slug}`;
  };

  const { Component } = FLOW[i];
  return <Component onNext={() => go(i + 1)} onBack={() => go(i - 1)} />;
}
