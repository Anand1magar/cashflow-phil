import React from 'react';
import Shell from '../components/Shell.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import GoBack from '../components/GoBack.jsx';

/* Best price found (43%) — Best price found.  Figma node 1576:5437
   Price figures are "$XX" placeholders in the source design; exposed as props. */

export default function BestPriceScreen({ onNext, onBack, term = '90 Day Supply for', amount = '$XX', monthly = '$XX/month' }) {

  return (
    <Shell cta={{ label: 'Next', onClick: onNext }}>
      <section className="mf-section" style={{ '--mf-pad-bottom': '200px' }}>
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
