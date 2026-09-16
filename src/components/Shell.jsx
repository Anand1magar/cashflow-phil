import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

/* Page frame shared by every screen: header, content, optional CTA, footer.
 *
 * cta: { label, onClick, disabled } — omit entirely for a screen with no
 * action bar (the delivery screen has none, per its Figma frame).
 *
 * On mobile the CTA is a sticky bar pinned to the bottom, below the footer.
 * On desktop, desktop.css re-orders it above the footer and makes it inline
 * and right-aligned — see DECISIONS.md.
 */
export default function Shell({ children, cta }) {
  return (
    <div className="mf-viewport">
      <div className="mf-screen">
        <Header />
        <main className="mf-body">{children}</main>
        <Footer />
        {cta && (
          <div className="mf-cta-bar">
            <div className="mf-cta-bar__inner">
              <button className="mf-cta" onClick={cta.onClick} disabled={cta.disabled}>
                {cta.label}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
