/* Page 4 — Shipping address.  Figma node 1576:5758
   Address line 1 + line 2 are a joined pair sharing one border; State/Zip sit side by side.
   Field values are the sample data authored in the design; exposed as props. */

function Page4({
  onNext,
  onBack,
  address1 = '123 Main Street',
  address2 = 'Apt. 5',
  city = 'San Francisco',
  state = 'CA',
  zip = '55320',
}) {
  const { Shell, ProgressBar, GoBack } = window.MainFlow;
  const [form, setForm] = React.useState({ address1, address2, city, state, zip });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <Shell cta={{ label: 'Next', onClick: onNext }}>
      <section className="mf-section" style={{ '--mf-pad-bottom': '100px' }}>
        <ProgressBar percent={57} />
        <GoBack onBack={onBack} />

        <h1 className="mf-h1">Shipping address</h1>

        <div className="mf-fields">
          <div className="mf-field">
            <span className="mf-field__label">Address</span>
            <div className="mf-field-stack">
              <input className="mf-field__input" value={form.address1} onChange={set('address1')} placeholder="Street address" aria-label="Address line 1" />
              <input className="mf-field__input" value={form.address2} onChange={set('address2')} placeholder="Apt, suite, etc." aria-label="Address line 2" />
            </div>
          </div>

          <label className="mf-field">
            <span className="mf-field__label">City</span>
            <input className="mf-field__input" value={form.city} onChange={set('city')} placeholder="City" />
          </label>

          <div className="mf-field-row">
            <label className="mf-field">
              <span className="mf-field__label">State</span>
              <input className="mf-field__input" value={form.state} onChange={set('state')} placeholder="State" />
            </label>
            <label className="mf-field">
              <span className="mf-field__label">Zip Code</span>
              <input className="mf-field__input" value={form.zip} onChange={set('zip')} placeholder="Zip Code" />
            </label>
          </div>
        </div>
      </section>
    </Shell>
  );
}

window.MainFlow = Object.assign(window.MainFlow || {}, { Page4 });
