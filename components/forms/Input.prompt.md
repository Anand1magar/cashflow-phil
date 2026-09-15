Floating text field used across the Cash-Flow onboarding flow (name, DOB, password fields), rendered when a bold 14px label sits above a bordered input row.

```jsx
<Input label="New Password" placeholder="Enter your new password" type="password" />
<Input label="Last Name" value="Truman" state="filled" />
<Input label="Coupon Code" state="error" helper="This code has expired" />
```

Variants: `state` = default | focused (blue border) | filled | error (red border/helper) | disabled (50% opacity). Pass `rightIcon` for a trailing status icon (e.g. `<Icon name="CheckCircleStyleFilled" />`).
