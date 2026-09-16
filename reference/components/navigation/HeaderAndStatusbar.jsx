import React from 'react';

// Sticky top bar used on every Cash-Flow screen: PHILRx wordmark + tagline,
// a thin progress track (rgb(219,231,251) track / rgb(35,99,195) fill) with
// its percentage, and a "Go Back" link with a back-chevron.
export function HeaderAndStatusbar({ progress = 50, onBack, showBack = true, className, style }) {
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 12, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 20, borderBottom: '1px solid var(--color-divider-2)', paddingBottom: 8 }}>
        <img src="../../assets/logo/philrx-logo-color.png" alt="PHILRx" style={{ height: 15 }} />
        <span style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 13, color: 'var(--color-teal)' }}>Rx at your fingertips</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1, height: 8, borderRadius: 24, background: 'var(--color-brand-blue-tint)', overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, height: '100%', borderRadius: 24, background: 'var(--color-brand-blue)' }} />
        </div>
        <span style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 12, color: 'var(--color-brand-blue)' }}>{progress}%</span>
      </div>
      {showBack && (
        <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', padding: 0, alignSelf: 'flex-start' }}>
          <span style={{ color: 'var(--color-ink-700)' }}>&#8592;</span>
          <span style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 14, color: 'var(--color-ink-700)' }}>Go Back</span>
        </button>
      )}
    </div>
  );
}
export default HeaderAndStatusbar;
