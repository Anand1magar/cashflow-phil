import React from 'react';
import Shell from '../components/Shell.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

/* Success / delivery (100%) — Success / delivery.  Figma node 1576:6200
   No sticky CTA and no Go Back: the design's footer holds only browser chrome.
   Forward navigation is the "Set up password" link. */

export default function DeliveryConfirmationScreen({
  onNext,
  medication = 'RYZUMVI®',
  address = ['123 Main St, Apt 5, San', 'Francisco CA 44512'],
  total = '$20.00',
  deliveryBy = 'Thu, 09/18',
}) {

  return (
    <Shell>
      <section className="mf-section" style={{ '--mf-pad-bottom': '100px', '--mf-pad-bottom-desktop': '100px' }}>
        <ProgressBar percent={100} />

        <div className="mf-success-icon">
          <img src="/assets/success-check.svg" alt="" />
        </div>

        <div className="mf-stack-12">
          <h1 className="mf-h1">Success! Next step: Delivery</h1>
          <p className="mf-lede">
            Your order is being prepared.<br />
            Get it by: {deliveryBy}
          </p>
        </div>

        <div className="mf-summary">
          <div className="mf-summary__row">
            <span className="mf-summary__key">Medication</span>
            <span className="mf-summary__val">{medication}</span>
          </div>
          <div className="mf-summary__row">
            <span className="mf-summary__key">Address</span>
            <span className="mf-summary__val">
              {address.map((line, i) => (
                <React.Fragment key={i}>{line}{i < address.length - 1 && <br />}</React.Fragment>
              ))}
            </span>
          </div>
          <div className="mf-summary__row">
            <span className="mf-summary__key">Total</span>
            <span className="mf-summary__val">{total}</span>
          </div>
        </div>

        <p className="mf-note">
          Set up a password for faster access (optional — you can always log in with a one-time code
          instead).
        </p>
        <button type="button" className="mf-link" onClick={onNext}>Set up password</button>
      </section>
    </Shell>
  );
}
