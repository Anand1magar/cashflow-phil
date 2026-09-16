import React from 'react';
import Shell from '../components/Shell.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import ConsentCard from '../components/ConsentCard.jsx';

/* Notification preferences (29%) — Notification preferences.  Figma node 1758:65928
   That node holds two frames of the SAME screen: Email unchecked (phone field only)
   and Email checked (phone + email fields). Implemented here as one conditional screen. */

export default function NotificationPreferencesScreen({ onNext }) {
  const [sms, setSms] = React.useState(true);      // Text Messages checked by default
  const [email, setEmail] = React.useState(false); // Email unchecked by default
  const [phoneValue, setPhoneValue] = React.useState('(786) 191 1021');
  const [emailValue, setEmailValue] = React.useState('');

  const Option = ({ on, onToggle, label, badge, desc }) => (
    <label className={'mf-option' + (on ? ' mf-option--on' : '')}>
      <span className="mf-option__box">
        <input type="checkbox" checked={on} onChange={onToggle} />
        {on ? (
          <span className="mf-option__mark"><img src="/assets/check-sm.svg" alt="" /></span>
        ) : (
          <img className="mf-option__blank" src="/assets/checkbox-blank.svg" alt="" />
        )}
      </span>
      <span className="mf-option__body">
        <span className="mf-option__head">
          <span className="mf-option__label">{label}</span>
          {badge && <span className="mf-option__badge">{badge}</span>}
        </span>
        <span className="mf-option__desc">{desc}</span>
      </span>
    </label>
  );

  return (
    <Shell cta={{ label: 'Next', onClick: onNext }}>
      <section className="mf-section">
        <ProgressBar percent={29} />

        <div className="mf-stack-12">
          <h1 className="mf-h1">Notification preferences</h1>
          <p className="mf-lede">
            How would you like to be notified about important prescription updates?
          </p>
        </div>

        <div className="mf-options">
          <Option
            on={sms}
            onToggle={() => setSms(!sms)}
            label="Text Messages"
            badge="Recommended"
            desc="Quick updates when your order ships or arrives."
          />
          <Option
            on={email}
            onToggle={() => setEmail(!email)}
            label="Email"
            desc="Same updates, sent to your inbox."
          />
        </div>

        {sms && (
          <div className="mf-field">
            <span className="mf-field__label">Phone Number</span>
            <input
              className="mf-field__input"
              value={phoneValue}
              placeholder="(555) 555-5555"
              onChange={(e) => setPhoneValue(e.target.value)}
            />
          </div>
        )}

        {email && (
          <div className="mf-field">
            <span className="mf-field__label">Email</span>
            <input
              className="mf-field__input"
              placeholder="Email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>
        )}

        <ConsentCard icon={false}>
          By continuing, you agree to receive prescription updates by the methods you selected.
          Message and data rates may apply. Reply STOP to <a href="#">unsubscribe</a> at any time.
          See our <a href="#">Terms of Use</a>, <a href="#">Privacy Policy</a>, and{' '}
          <a href="#">HIPAA Policy</a>.
        </ConsentCard>
      </section>
    </Shell>
  );
}
