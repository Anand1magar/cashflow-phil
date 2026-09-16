function Shell({ children, footer=true, headerProps={} }) {
  const { HeaderAndStatusbar, MyPhilFooter } = window.PHILRxDesignSystem_59d472;
  return (
    <div style={{ width: 390, minHeight: 844, background: '#fff', margin: '0 auto', boxShadow: '0 0 40px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '20px 20px 0' }}><HeaderAndStatusbar {...headerProps} /></div>
      <div style={{ flex: 1, padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 24 }}>{children}</div>
      {footer && <MyPhilFooter />}
    </div>
  );
}
window.CashFlowKit = Object.assign(window.CashFlowKit || {}, { Shell });
