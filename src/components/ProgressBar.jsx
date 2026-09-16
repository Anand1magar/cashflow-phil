import React from 'react';

/* Shared page frame for the main flow: header, scrollable body, sticky CTA, footer.
   Header/footer come from Figma node 1593:11798 and recur on every screen. */

function Header() {
  return (
    <header className="mf-header">
      <div className="mf-header__inner">
        <img className="mf-header__logo" src="/assets/logo/philrx-logo-color.png" alt="PHILRx" />
        <span className="mf-header__tagline">Rx at your fingertips</span>
      </div>
    </header>
  );
}

function Footer() {
  const policies = [
    { label: 'Terms of Use', icon: '/assets/icon-terms.svg' },
    { label: 'Privacy Policy', icon: '/assets/icon-privacy.svg' },
    { label: 'HIPAA Policy', icon: '/assets/icon-hipaa.svg' },
  ];
  return (
    <footer className="mf-footer">
      <div className="mf-footer__inner">
      <div className="mf-footer__block">
        <h2 className="mf-footer__h">Questions?</h2>
        <p className="mf-footer__sub">We're here to help.</p>
        <div className="mf-footer__links">
          <a className="mf-footer__link" href="#"><span>View our FAQ</span><img src="/assets/chevron-faq.svg" alt="" /></a>
          <a className="mf-footer__link" href="#"><span>Contact us</span><img src="/assets/chevron-contact.svg" alt="" /></a>
        </div>
      </div>
      <div className="mf-footer__right">
      <div className="mf-policies">
        {policies.map((p) => (
          <a className="mf-policy" href="#" key={p.label}>
            <img src={p.icon} alt="" />
            <span>{p.label}</span>
          </a>
        ))}
      </div>
      <div className="mf-colophon">
        <img src="/assets/logo/philrx-logo-color.png" alt="PHILRx" />
        <span>© PHILRx, Inc. All rights reserved.</span>
      </div>
      </div>
      </div>
    </footer>
  );
}

/* Checkbox row with optional description. Shared: recurs across the flow. */
function CheckRow({ checked, onToggle, label, description, muted }) {
  return (
    <label className={'mf-check' + (description ? ' mf-check--top' : '')}>
      <input type="checkbox" checked={checked} onChange={onToggle} />
      <img
        className="mf-check__glyph"
        src={checked ? '/assets/checkbox-checked.svg' : '/assets/checkbox-blank.svg'}
        alt=""
      />
      <span className="mf-check__body">
        <span className={'mf-check__label' + (muted ? ' mf-check__label--muted' : '')}>{label}</span>
        {description && <span className="mf-check__desc">{description}</span>}
      </span>
    </label>
  );
}

/* "Go Back" control — appears from page 3 on; wired to the router's onBack. */
function GoBack({ onBack }) {
  return (
    <button type="button" className="mf-goback" onClick={onBack}>
      <img src="/assets/arrow-back.svg" alt="" />
      Go Back
    </button>
  );
}

/* Step progress bar — appears at the top of the content area from page 2 on. */
export default function ProgressBar({ percent }) {
  const pct = Math.max(0, Math.min(100, percent));
  return (
    <div className="mf-progress" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="mf-progress__track">
        <div className="mf-progress__fill" style={{ width: pct + '%' }} />
      </div>
      <span className="mf-progress__pct">{pct}%</span>
    </div>
  );
}
