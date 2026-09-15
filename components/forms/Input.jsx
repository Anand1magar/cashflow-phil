import React from 'react';

// Hand-authored to match the floating-label text field used throughout the
// Cash-Flow mobile flow (e.g. "New Password", "Last Name", "Date of Birth").
// Not a bound Figma component instance — the flow builds this pattern inline
// per-screen; values below are copied verbatim from those instances.
export function Input({
  label = 'Label',
  value = '',
  placeholder = '',
  state = 'default', // default | focused | filled | error | disabled
  helper = '',
  rightIcon = null,
  type = 'text',
  className,
  style,
}) {
  const borderColor = {
    default: 'var(--color-border)',
    focused: 'var(--color-brand-blue)',
    filled: 'var(--color-border)',
    error: 'var(--color-error)',
    disabled: 'var(--color-border)',
  }[state];
  const textColor = state === 'disabled' ? 'var(--color-ink-400)' : 'var(--color-ink-1000)';
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', opacity: state === 'disabled' ? 0.5 : 1, ...style }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 14, lineHeight: '20px', color: 'var(--color-ink-1000)' }}>{label}</span>
      </div>
      <div style={{
        borderRadius: 8,
        boxShadow: `inset 0 0 0 1px ${borderColor}`,
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '8px 16px',
        background: 'var(--color-surface)',
      }}>
        <input
          type={type}
          defaultValue={value}
          placeholder={placeholder}
          disabled={state === 'disabled'}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 16, lineHeight: '24px',
            color: value ? textColor : 'var(--color-ink-400)',
          }}
        />
        {rightIcon}
      </div>
      {helper && (
        <span style={{ fontFamily: 'var(--font-primary)', fontSize: 12, lineHeight: '16px', color: state === 'error' ? 'var(--color-error)' : 'var(--color-ink-500)' }}>{helper}</span>
      )}
    </div>
  );
}
export default Input;
