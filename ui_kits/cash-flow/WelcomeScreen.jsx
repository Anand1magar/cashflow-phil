function WelcomeScreen({ onNext }) {
  const { Input, MyPhilButtonExtended, InfoMessage } = window.PHILRxDesignSystem_59d472;
  const { Shell } = window.CashFlowKit;
  return (
    <Shell headerProps={{ progress: 43, showBack: false }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 31.6875, lineHeight: '43.875px', color: 'var(--color-ink-900)' }}>Welcome to PHILRx!<br />Your prescription starts here!</h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-primary)', fontSize: 17.0625, lineHeight: '24.375px', color: 'var(--color-ink-900)' }}>Dr. Cristina Truman sent your RYZUMVI® prescription. Confirm your identity to continue.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Input label="Last Name" placeholder="Enter your last name" />
        <Input label="Date of Birth" placeholder="MM/DD/YYYY" />
      </div>
      <InfoMessage icon="ErrorStyleFilled">By proceeding, you agree to our terms of use, privacy policy and HIPAA policy</InfoMessage>
      <div style={{ marginTop: 'auto', cursor: 'pointer' }} onClick={onNext}>
        <MyPhilButtonExtended device="mobile" hirerarchy="primary" buttonLabel="Continue" style={{ width: '100%' }} />
      </div>
    </Shell>
  );
}
window.CashFlowKit = Object.assign(window.CashFlowKit || {}, { WelcomeScreen });
