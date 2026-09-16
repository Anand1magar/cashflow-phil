# Cash-Flow — mobile onboarding UI kit

Click-through recreation of the PHILRx "Cash-Flow" onboarding flow (identity confirmation → password setup → health questionnaire → delivery confirmation), built from the 27 frames the user scoped in the attached Figma file (`/Cash-Flow` page).

Open `index.html`. Click "Continue" / "Confirm Order" to advance; pick Yes/No on the health screen to unlock its button (matches the source's disabled-until-answered state).

Files: `Shell.jsx` (shared header/footer chrome), `WelcomeScreen.jsx`, `PasswordScreen.jsx`, `HealthInfoScreen.jsx`, `DeliveryScreen.jsx`.
