/* Page 3 — Best price found.  Figma node 1576:5437
   Price figures are "$XX" placeholders in the source design; exposed as props. */

function Page3({ onNext, onBack, term = '90 Day Supply for', amount = '$XX', monthly = '$XX/month' }) {
  const { Shell, ProgressBar, GoBack } = window.MainFlow;

  return (
    <Shell cta={{ label: 'Next', onClick: onNext }}>
      <section className="mf-section">
        <ProgressBar percent={43} />
        <GoBack onBack={onBack} />

        <h1 className="mf-h1">We found your best price on RYZUMVI®!</h1>

        <div className="mf-price-card">
          <div className="mf-price-card__row">
            <span className="mf-price-card__term">{term}</span>
            <span className="mf-price-card__figures">
              <span className="mf-price-card__amount">{amount}</span>
              <span className="mf-price-card__badge">{monthly}</span>
            </span>
          </div>
        </div>
      </section>
    </Shell>
  );
}

window.MainFlow = Object.assign(window.MainFlow || {}, { Page3 });
