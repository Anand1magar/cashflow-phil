/* Page 6 — Health information.  Figma node 1758:65930
   Three frames of one screen: nothing chosen (CTA disabled), "No" chosen,
   and "Yes" chosen (allergy checklist + medication/history textareas).
   No Go Back on this screen — the design doesn't draw one. */

const ALLERGENS = [
  { id: 'aspirin', label: 'Aspirin', on: true },
  { id: 'penicillin', label: 'Penicillin', on: false },
  { id: 'insulin', label: 'Insulin', on: true },
  { id: 'nsaids', label: 'NSAIDs', on: false },
  { id: 'morphin', label: 'Morphin', on: true },
  { id: 'latex', label: 'Latex', on: false },
  { id: 'other', label: 'Other', on: false },
];

function Page6({ onNext }) {
  const { Shell, ProgressBar, ConsentCard } = window.MainFlow;
  const [answer, setAnswer] = React.useState(null);   // null | 'yes' | 'no'
  const [allergies, setAllergies] = React.useState(
    () => Object.fromEntries(ALLERGENS.map((a) => [a.id, a.on]))
  );
  const [medication, setMedication] = React.useState('');
  const [history, setHistory] = React.useState('');

  const Choice = ({ id, label }) => (
    <label className={'mf-choice' + (answer === id ? ' mf-choice--on' : '')}>
      <input type="radio" name="health" checked={answer === id} onChange={() => setAnswer(id)} />
      <img
        className="mf-choice__radio"
        src={answer === id ? 'assets/radio-checked.svg' : 'assets/radio-unchecked.svg'}
        alt=""
      />
      <span className="mf-choice__label">{label}</span>
    </label>
  );

  return (
    <Shell cta={{ label: 'Next', onClick: onNext, disabled: !answer }}>
      <section className="mf-section">
        <ProgressBar percent={86} />

        <div className="mf-stack-12">
          <h1 className="mf-h1">Payment information received! Complete your health information</h1>
          <p className="mf-lede">
            Do you have any allergies, medical conditions, or current medications?
          </p>
        </div>

        <div className="mf-choices">
          <Choice id="yes" label="Yes" />
          <Choice id="no" label="No" />
        </div>

        {answer === 'yes' && (
          <>
            <div className="mf-checklist-group">
              <p className="mf-checklist-group__title">Allergies</p>
              <div className="mf-checklist">
                {ALLERGENS.map((a, i) => (
                  <React.Fragment key={a.id}>
                    {i > 0 && <hr className="mf-checklist__divider" />}
                    <label className="mf-checklist__row">
                      <input
                        type="checkbox"
                        checked={allergies[a.id]}
                        onChange={() => setAllergies({ ...allergies, [a.id]: !allergies[a.id] })}
                      />
                      <img
                        className="mf-checklist__glyph"
                        src={allergies[a.id] ? 'assets/checkbox-checked.svg' : 'assets/checkbox-blank.svg'}
                        alt=""
                      />
                      <span className="mf-checklist__label">{a.label}</span>
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mf-fields" style={{ gap: 24 }}>
              <label className="mf-field">
                <span className="mf-field__label">Current Medication</span>
                <textarea
                  className="mf-field__input mf-field__textarea"
                  placeholder="List current medication"
                  value={medication}
                  onChange={(e) => setMedication(e.target.value)}
                />
              </label>
              <label className="mf-field">
                <span className="mf-field__label">Medical History</span>
                <textarea
                  className="mf-field__input mf-field__textarea"
                  placeholder="List medical history"
                  value={history}
                  onChange={(e) => setHistory(e.target.value)}
                />
              </label>
            </div>
          </>
        )}

        <hr className="mf-divider" />

        <ConsentCard icon={false}>
          Before processing your order, we'll review your health information to make sure the
          medication is appropriate for you.
        </ConsentCard>
      </section>
    </Shell>
  );
}

window.MainFlow = Object.assign(window.MainFlow || {}, { Page6 });
