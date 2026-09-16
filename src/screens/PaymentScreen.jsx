import React from 'react';
import Shell from '../components/Shell.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import GoBack from '../components/GoBack.jsx';
import CheckRow from '../components/CheckRow.jsx';

/* Payment information (57%) — Payment information.  Figma node 1764:91163
   That node holds three frames of one screen:
     84 — nothing selected, no CTA
     85 — Credit/Debit selected, card form open, "Billing address same as shipping" checked
     86 — same with that box unchecked, revealing billing address fields
   Implemented as one screen driven by state. The CTA only appears once a method
   is chosen, matching frame 84 having no button. */

export default function PaymentScreen({ onNext, onBack, amount = '$XX' }) {
  const [method, setMethod] = React.useState(null);   // frame 84: nothing selected
  const [sameAsShipping, setSameAsShipping] = React.useState(true);
  const [fsa, setFsa] = React.useState(false);
  const [autoRefill, setAutoRefill] = React.useState(true);
  const [card, setCard] = React.useState({ number: '1234-1234-1234-1234', exp: '01/28', cvv: '120' });
  const [billing, setBilling] = React.useState({
    address1: '123 Main Street', address2: 'Apt. 5', city: 'San Francisco', state: 'CA', zip: '55320',
  });
  const setCardField = (k) => (e) => setCard({ ...card, [k]: e.target.value });
  const setBillField = (k) => (e) => setBilling({ ...billing, [k]: e.target.value });

  const VisaMastercard = () => (
    <span className="mf-brand">
      <span className="mf-brand__visa">VISA</span>
      <span className="mf-brand__mc" aria-label="Mastercard"><i /><i /></span>
    </span>
  );
  const ApplePayMark = () => (
    <span className="mf-brand__applepay" aria-label="Apple Pay">
      <img src="/assets/applepay-mark.svg" alt="" />
      <img src="/assets/applepay-text.svg" alt="" />
    </span>
  );
  const PaypalMark = () => <img className="mf-brand__paypal" src="/assets/paypal.png" alt="PayPal" />;

  const Method = ({ id, label, mark, children }) => (
    <div className="mf-pay-card">
      <label className="mf-pay-head">
        <input type="radio" name="payment" checked={method === id} onChange={() => setMethod(id)} />
        <img
          className="mf-pay-head__radio"
          src={method === id ? '/assets/radio-checked.svg' : '/assets/radio-unchecked.svg'}
          alt=""
        />
        <span className="mf-pay-head__main">
          <span className="mf-pay-head__label">{label}</span>
          {mark}
        </span>
      </label>
      {method === id && children}
    </div>
  );

  return (
    <Shell cta={method ? { label: `Confirm ${amount}`, onClick: onNext } : null}>
      <section className="mf-section" style={{ '--mf-pad-bottom': '100px' }}>
        <ProgressBar percent={57} />
        <GoBack onBack={onBack} />

        <h1 className="mf-h1">Payment information</h1>

        <div className="mf-pay-list">
          <Method id="card" label="Credit/Debit Card" mark={<VisaMastercard />}>
            <div className="mf-pay-form">
              <div className="mf-pay-form__fields">
                <div className="mf-pay-form__card">
                  <label className="mf-field">
                    <span className="mf-field__label">Credit/Debit Card Number</span>
                    <input className="mf-field__input" value={card.number} onChange={setCardField('number')} placeholder="1234-1234-1234-1234" />
                  </label>
                  <div className="mf-field-row">
                    <label className="mf-field">
                      <span className="mf-field__label">Expiration Date</span>
                      <input className="mf-field__input" value={card.exp} onChange={setCardField('exp')} placeholder="MM/YY" />
                    </label>
                    <label className="mf-field">
                      <span className="mf-field__label">CVV</span>
                      <input className="mf-field__input" value={card.cvv} onChange={setCardField('cvv')} placeholder="CVV" />
                    </label>
                  </div>
                </div>
                <CheckRow
                  checked={fsa}
                  onToggle={() => setFsa(!fsa)}
                  label="This is a FSA, HSA or HRA card"
                  muted
                />
              </div>

              <div className="mf-billing">
                <p className="mf-billing__title">Billing address</p>
                <CheckRow
                  checked={sameAsShipping}
                  onToggle={() => setSameAsShipping(!sameAsShipping)}
                  label="Billing address same as shipping"
                />
              </div>

              {!sameAsShipping && (
                <div className="mf-fields">
                  <div className="mf-field">
                    <span className="mf-field__label">Address</span>
                    <div className="mf-field-stack">
                      <input className="mf-field__input" value={billing.address1} onChange={setBillField('address1')} placeholder="Street address" aria-label="Billing address line 1" />
                      <input className="mf-field__input" value={billing.address2} onChange={setBillField('address2')} placeholder="Apt, suite, etc." aria-label="Billing address line 2" />
                    </div>
                  </div>
                  <label className="mf-field">
                    <span className="mf-field__label">City</span>
                    <input className="mf-field__input" value={billing.city} onChange={setBillField('city')} placeholder="City" />
                  </label>
                  <div className="mf-field-row">
                    <label className="mf-field">
                      <span className="mf-field__label">State</span>
                      <input className="mf-field__input" value={billing.state} onChange={setBillField('state')} placeholder="State" />
                    </label>
                    <label className="mf-field">
                      <span className="mf-field__label">Zip Code</span>
                      <input className="mf-field__input" value={billing.zip} onChange={setBillField('zip')} placeholder="Zip Code" />
                    </label>
                  </div>
                </div>
              )}

              <hr className="mf-divider" />

              <CheckRow
                checked={autoRefill}
                onToggle={() => setAutoRefill(!autoRefill)}
                label="Ship refills automatically"
                description={<>We'll notify before your refill ships. You can unenroll any time. <a href="#">Learn more</a></>}
              />
            </div>
          </Method>

          <Method id="applepay" label="Apple Pay" mark={<ApplePayMark />} />
          <Method id="paypal" label="Pay later with Paypal" mark={<PaypalMark />} />
        </div>
      </section>
    </Shell>
  );
}
