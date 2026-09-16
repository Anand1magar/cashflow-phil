import React from 'react';

/* Site header: logo + tagline. Full-bleed on desktop, inner column capped at 600px. */
export default function Header() {
  return (
    <header className="mf-header">
      <div className="mf-header__inner">
        <img className="mf-header__logo" src="/assets/logo/philrx-logo-color.png" alt="PHILRx" />
        <span className="mf-header__tagline">Rx at your fingertips</span>
      </div>
    </header>
  );
}
