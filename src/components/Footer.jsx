import React from 'react';

export default function Footer() {
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
