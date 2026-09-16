function HealthInfoScreen({ onNext }) {
  const { RadioButtons, MyPhilButtonExtended, InfoMessage } = window.PHILRxDesignSystem_59d472;
  const { Shell } = window.CashFlowKit;
  const [val, setVal] = React.useState(null);
  return (
    <Shell headerProps={{ progress: 86 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 31.6875, lineHeight: '43.875px', color: 'var(--color-ink-900)' }}>Payment information received! Complete your health information</h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-primary)', fontSize: 17.0625, lineHeight: '24.375px', color: 'var(--color-ink-900)' }}>Do you have any allergies, medical conditions, or current medications?</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} onClick={(e)=>{const l=e.target.closest('[data-opt]');if(l) setVal(l.dataset.opt);}}>
        <div data-opt="yes" style={{cursor:'pointer'}}><RadioButtons selected={val==='yes'} text1="Yes" /></div>
        <div data-opt="no" style={{cursor:'pointer'}}><RadioButtons selected={val==='no'} text1="No" /></div>
      </div>
      <InfoMessage icon="CheckCircleStyleFilled">Before processing your order, we'll review your health information to make sure the medication is safe for you.</InfoMessage>
      <div style={{ marginTop: 'auto', cursor: val ? 'pointer' : 'default' }} onClick={val ? onNext : undefined}>
        <MyPhilButtonExtended device="mobile" hirerarchy="primary" buttonLabel="Confirm Order" style={{ width: '100%', opacity: val?1:0.3 }} />
      </div>
    </Shell>
  );
}
window.CashFlowKit = Object.assign(window.CashFlowKit || {}, { HealthInfoScreen });
