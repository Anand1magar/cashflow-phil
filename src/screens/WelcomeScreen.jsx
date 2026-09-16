import React from 'react';
import Shell from '../components/Shell.jsx';
import ConsentCard from '../components/ConsentCard.jsx';

/* Welcome / confirm identity.  Figma node 1593:11798
   On desktop the CTA sits directly under the consent card rather than at the
   foot of the page, so it follows the form it submits. Mobile keeps the
   sticky bar. See DECISIONS.md. */

export default function WelcomeScreen({ onNext }) {
  const [lastName, setLastName] = React.useState('');
  const [dob, setDob] = React.useState('');

  const steps = [
    'Confirm your information',
    'PHILRx will find your lowest price',
    "Confirm your price, and we'll ship your medication",
  ];

  return (
    <Shell cta={{ label: 'Next', onClick: onNext }} ctaInlineOnDesktop>
      <section className="mf-section">
        <div className="mf-stack-12">
          <h1 className="mf-h1">Welcome to PHILRx!{' '}<br className="mf-br-mobile" />Your prescription starts here!</h1>
          <p className="mf-lede">
            Dr. Cristina Truman sent your RYZUMVI® prescription. Confirm your identity to continue.
          </p>
        </div>

        <div className="mf-fields">
          <label className="mf-field">
            <span className="mf-field__label">Last Name</span>
            <input
              className="mf-field__input"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label className="mf-field">
            <span className="mf-field__label">Date of Birth</span>
            <input
              className="mf-field__input"
              placeholder="MM/DD/YYYY"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </label>
        </div>

        <ConsentCard caps />

        {/* desktop only — the sticky bar covers mobile */}
        <div className="mf-inline-cta">
          <button className="mf-cta" onClick={onNext}>Next</button>
        </div>

        <hr className="mf-rule" />

        <p className="mf-login">Already have a PHILRx account? <a href="#">Log in</a></p>

        <div className="mf-ratings">
          <img src="/assets/trustpilot.png" alt="Trustpilot rating" style={{ height: 36 }} />
          <img src="/assets/bbb-accredited.jpg" alt="BBB Accredited Business" style={{ height: 36 }} />
          <img src="/assets/soc2.png" alt="SOC 2 Type 2 certified" style={{ height: 44 }} />
        </div>

        <div className="mf-next">
          <h2 className="mf-next__title">What's next</h2>
          <ol className="mf-next__list">
            {steps.map((text, i) => (
              <li className="mf-next__item" key={i}>
                <span className="mf-next__num">{i + 1}</span>
                <span className="mf-next__text">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mf-faq">
        <div className="mf-faq__q">
          <h2 className="mf-faq__title">Why should I use PHILRx?</h2>
          <p className="mf-faq__body">
            PHILRx coordinates with your doctor, your insurance company, and our network of partner
            pharmacies to work on finding your lowest cost and get your prescription filled. PHILRx has:
          </p>
          <ul className="mf-faq__list">
            <li>Automated refills that are processed and delivered as part of our auto-refill program</li>
            <li>Free shipping with every delivery</li>
            <li>Manufacturer offers that may be applied to lower your cost</li>
          </ul>
          <p className="mf-faq__body">PHILRx is here to help manage your prescription!</p>
        </div>
      </section>
    </Shell>
  );
}
