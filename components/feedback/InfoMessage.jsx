import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';

// The rounded info card with a teal icon-in-circle + copy, shown once per
// screen above the CTA (e.g. "Before processing your order, we'll review
// your health information..."). Exact shadow/radius copied from source.
export function InfoMessage({ icon = 'CheckCircleStyleFilled', children, className, style }) {
  return (
    <div className={className} style={{
      borderRadius: 9.75,
      boxShadow: 'inset 0 0 0 1.219px var(--color-border), 0px 4.875px 12.188px 0px rgba(0,0,0,0.15)',
      display: 'flex', gap: 14.625, padding: 19.5, alignItems: 'flex-start',
      background: 'var(--color-surface)',
      ...style,
    }}>
      <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-teal-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon name={icon} size={23} style={{ color: 'var(--color-teal)' }} />
      </div>
      <span style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 14.625, lineHeight: '24.375px', color: 'var(--color-ink-1000)' }}>{children}</span>
    </div>
  );
}
export default InfoMessage;
