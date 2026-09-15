function PasswordScreen({ onNext }) {
  const { Input, MyPhilButtonExtended, Checkbox, InfoMessage } = window.PHILRxDesignSystem_59d472;
  const { Shell } = window.CashFlowKit;
  const [show, setShow] = React.useState(false);
  return (
    <Shell headerProps={{ progress: 86 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 31.6875, lineHeight: '43.875px', color: 'var(--color-ink-900)' }}>Set up your password!</h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-primary)', fontSize: 17.0625, lineHeight: '24.375px', color: 'var(--color-ink-900)' }}>Select a secure password to protect your PHILRx account.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Input label="New Password" placeholder="Enter your new password" type={show ? 'text' : 'password'} />
        <Input label="Confirm Password" placeholder="Re-enter your new password" type={show ? 'text' : 'password'} />
        <Checkbox label="Show Password" checked={show} onChange={setShow} />
      </div>
      <InfoMessage icon="ErrorStyleFilled">By proceeding, you agree to our terms of use, privacy policy and HIPAA policy</InfoMessage>
      <div style={{ marginTop: 'auto', cursor: 'pointer' }} onClick={onNext}>
        <MyPhilButtonExtended device="mobile" hirerarchy="primary" buttonLabel="Save" style={{ width: '100%' }} />
      </div>
    </Shell>
  );
}
window.CashFlowKit = Object.assign(window.CashFlowKit || {}, { PasswordScreen });
