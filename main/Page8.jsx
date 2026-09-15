/* Page 8 — Set up your password.  Figma node 1576:6345
   No progress bar on this screen. Consent card matches page 1 (shield icon, caps links). */

function Page8({ onNext }) {
  const { Shell, ConsentCard, CheckRow } = window.MainFlow;
  const [pw, setPw] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [show, setShow] = React.useState(false);

  return (
    <Shell cta={{ label: 'Save', onClick: onNext }}>
      <section className="mf-section">
        <div className="mf-stack-12">
          <h1 className="mf-h1">Set up your password!</h1>
          <p className="mf-lede">Select a secure password to protect your PHILRx account.</p>
        </div>

        <div className="mf-fields">
          <label className="mf-field">
            <span className="mf-field__label">New Password</span>
            <input
              className="mf-field__input"
              type={show ? 'text' : 'password'}
              placeholder="New Password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </label>
          <label className="mf-field">
            <span className="mf-field__label">Confirm Password</span>
            <input
              className="mf-field__input"
              type={show ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </label>
        </div>

        <CheckRow checked={show} onToggle={() => setShow(!show)} label="Show Password" />

        <ConsentCard caps />
      </section>
    </Shell>
  );
}

window.MainFlow = Object.assign(window.MainFlow || {}, { Page8 });
