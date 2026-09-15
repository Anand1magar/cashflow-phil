import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';

// Matches the checkbox pattern used for "Show Password" / HSA·FSA·HRA card
// toggles in the Cash-Flow flow: a 32px outlined/filled Material-style glyph
// plus a label, no separate box chrome.
export function Checkbox({ label = 'Label', checked = false, onChange, disabled = false, className, style }) {
  return (
    <label className={className} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <Icon
        name={checked ? 'CheckBoxStyleFilled' : 'CheckBoxOutlineBlankStyleOutlined'}
        size={24}
        style={{ color: checked ? 'var(--color-brand-blue)' : 'var(--color-ink-500)', flexShrink: 0 }}
        onClick={() => !disabled && onChange && onChange(!checked)}
      />
      <span style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 17.0625, lineHeight: '24.375px', color: 'var(--color-ink-700)' }}>{label}</span>
    </label>
  );
}
export default Checkbox;
