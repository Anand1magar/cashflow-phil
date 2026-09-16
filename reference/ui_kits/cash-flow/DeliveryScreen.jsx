function DeliveryScreen() {
  const { MyPhilButtonExtended } = window.PHILRxDesignSystem_59d472;
  const { Shell } = window.CashFlowKit;
  const rows = [
    ['Medication', 'RYZUMVI®'],
    ['Address', '123 Main St, Apt 5, San Francisco CA 44512'],
    ['Total', '$20.00'],
  ];
  return (
    <Shell headerProps={{ progress: 100, showBack: false }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 31.6875, lineHeight: '43.875px', color: 'var(--color-ink-900)' }}>Success! Next step: Delivery</h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-primary)', fontSize: 17.0625, lineHeight: '24.375px', color: 'var(--color-ink-900)' }}>Your order is being prepared.<br />Get it by: Thu, 09/18</p>
      </div>
      <div style={{ borderRadius: 12, boxShadow: 'inset 0 0 0 1px var(--color-border), 0px 4.875px 12.188px 0px rgba(0,0,0,0.05)' }}>
        {rows.map(([k,v],i)=> (
          <div key={k} style={{ display:'flex', justifyContent:'space-between', gap: 12, padding: '16px 20px', borderTop: i? '1px solid var(--color-border)':'none' }}>
            <span style={{ fontFamily:'var(--font-primary)', fontWeight:700, fontSize:14.625, color:'var(--color-ink-1000)' }}>{k}</span>
            <span style={{ fontFamily:'var(--font-primary)', fontSize:14.625, color:'var(--color-ink-700)', textAlign:'right' }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'auto' }}>
        <MyPhilButtonExtended device="mobile" hirerarchy="primary" buttonLabel="Track My Order" style={{ width: '100%' }} />
      </div>
    </Shell>
  );
}
window.CashFlowKit = Object.assign(window.CashFlowKit || {}, { DeliveryScreen });
