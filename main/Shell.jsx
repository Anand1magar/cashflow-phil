/* Shared page frame for the main flow: header, scrollable body, sticky CTA, footer.
   Header/footer come from Figma node 1593:11798 and recur on every screen. */

function Header() {
  return (
    <header className="mf-header">
      <img className="mf-header__logo" src="../assets/logo/philrx-logo-color.png" alt="PHILRx" />
      <span className="mf-header__tagline">Rx at your fingertips</span>
    </header>
  );
}

function Footer() {
  const policies = [
    { label: 'Terms of Use', icon: 'assets/icon-terms.svg' },
    { label: 'Privacy Policy', icon: 'assets/icon-privacy.svg' },
    { label: 'HIPAA Policy', icon: 'assets/icon-hipaa.svg' },
  ];
  return (
    <footer className="mf-footer">
      <div className="mf-footer__block">
        <h2 className="mf-footer__h">Questions?</h2>
        <p className="mf-footer__sub">We're here to help.</p>
        <div className="mf-footer__links">
          <a className="mf-footer__link" href="#"><span>View our FAQ</span><img src="assets/chevron-faq.svg" alt="" /></a>
          <a className="mf-footer__link" href="#"><span>Contact us</span><img src="assets/chevron-contact.svg" alt="" /></a>
        </div>
      </div>
      <div className="mf-policies">
        {policies.map((p) => (
          <a className="mf-policy" href="#" key={p.label}>
            <img src={p.icon} alt="" />
            <span>{p.label}</span>
          </a>
        ))}
      </div>
      <div className="mf-colophon">
        <img src="../assets/logo/philrx-logo-color.png" alt="PHILRx" />
        <span>© PHILRx, Inc. All rights reserved.</span>
      </div>
    </footer>
  );
}

/* Checkbox row with optional description. Shared: recurs across the flow. */
function CheckRow({ checked, onToggle, label, description, muted }) {
  return (
    <label className="mf-check">
      <input type="checkbox" checked={checked} onChange={onToggle} />
      <img
        className="mf-check__glyph"
        src={checked ? 'assets/checkbox-checked.svg' : 'assets/checkbox-blank.svg'}
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
      <img src="assets/arrow-back.svg" alt="" />
      Go Back
    </button>
  );
}

/* Step progress bar — appears at the top of the content area from page 2 on. */
function ProgressBar({ percent }) {
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

/* Legal-consent card shown above the CTA. Shared: recurs across the flow.
   No shadow — flat with a 1px border. */
function ConsentCard({ children, icon = true, caps = false }) {
  return (
    <div className={'mf-consent' + (caps ? ' mf-consent--caps' : '')}>
      {icon && <img className="mf-consent__icon" src="assets/shield-icon.svg" alt="" />}
      <p className="mf-consent__text">
        {children || (
          <>
            By proceeding, you agree to our <a href="#">terms of use,</a>{' '}
            <a href="#">privacy policy</a> and <a href="#">HIPPA policy</a>
          </>
        )}
      </p>
    </div>
  );
}

/* cta: { label, onClick, disabled } — omit to render a page with no action bar. */
function Shell({ children, cta }) {
  return (
    <div className="mf-viewport">
      <div className="mf-screen">
        <Header />
        <main className="mf-body">{children}</main>
        <Footer />
        {cta && (
          <div className="mf-cta-bar">
            <button className="mf-cta" onClick={cta.onClick} disabled={cta.disabled}>
              {cta.label}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

window.MainFlow = Object.assign(window.MainFlow || {}, { Shell, Header, Footer, ConsentCard, ProgressBar, GoBack, CheckRow });
