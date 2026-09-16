import React from 'react';

// Legal footer repeated at the bottom of every Cash-Flow screen: a
// "Questions?" help block (FAQ / Contact links), Privacy/HIPAA links, then
// the PHILRx logo + copyright line. Copied verbatim from the flow's footer.
export function MyPhilFooter({ className, style }) {
  return (
    <div className={className} style={{ borderTop: '1px solid #E8E8E8', display: 'flex', flexDirection: 'column', ...style }}>
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 16, color: 'var(--color-ink-1000)' }}>Questions?</span>
        <span style={{ fontFamily: 'var(--font-primary)', fontSize: 14, color: 'var(--color-ink-400)' }}>We're here to help.</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 8 }}>
          <a href="#" style={{ color: 'var(--color-brand-blue)', fontFamily: 'var(--font-primary)', fontSize: 14 }}>View our FAQ &rarr;</a>
          <a href="#" style={{ color: 'var(--color-brand-blue)', fontFamily: 'var(--font-primary)', fontSize: 14 }}>Contact us &rarr;</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #E8E8E8', padding: '20px 20px', display: 'flex', justifyContent: 'space-between' }}>
        <a href="#" style={{ color: 'var(--color-brand-blue)', fontFamily: 'var(--font-primary)', fontSize: 12 }}>Privacy Policy</a>
        <a href="#" style={{ color: 'var(--color-brand-blue)', fontFamily: 'var(--font-primary)', fontSize: 12 }}>HIPAA Policy</a>
      </div>
      <div style={{ padding: '20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src="../../assets/logo/philrx-logo-color.png" alt="PHILRx" style={{ height: 13 }} />
        <span style={{ fontFamily: 'var(--font-primary)', fontSize: 12, color: 'var(--color-ink-400)' }}>&copy; PHILRx, Inc. All rights reserved.</span>
      </div>
    </div>
  );
}
export default MyPhilFooter;
