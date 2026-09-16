/* The order of the flow, in one place.
 * Screens are named for what they are, so reordering never means renaming a file.
 * `node` is the Figma node each screen was built from — see DECISIONS.md.
 */
import WelcomeScreen from './screens/WelcomeScreen.jsx';
import NotificationPreferencesScreen from './screens/NotificationPreferencesScreen.jsx';
import BestPriceScreen from './screens/BestPriceScreen.jsx';
import ShippingAddressScreen from './screens/ShippingAddressScreen.jsx';
import PaymentScreen from './screens/PaymentScreen.jsx';
import HealthInfoScreen from './screens/HealthInfoScreen.jsx';
import DeliveryConfirmationScreen from './screens/DeliveryConfirmationScreen.jsx';
import CreatePasswordScreen from './screens/CreatePasswordScreen.jsx';

export const FLOW = [
  { slug: 'welcome',            title: 'Welcome / confirm identity', node: '1593:11798', Component: WelcomeScreen },
  { slug: 'notifications',      title: 'Notification preferences',   node: '1758:65928', Component: NotificationPreferencesScreen },
  { slug: 'best-price',         title: 'Best price found',           node: '1576:5437',  Component: BestPriceScreen },
  { slug: 'shipping-address',   title: 'Shipping address',           node: '1576:5758',  Component: ShippingAddressScreen },
  { slug: 'payment',            title: 'Payment information',        node: '1764:91163', Component: PaymentScreen },
  { slug: 'health-info',        title: 'Health information',         node: '1758:65930', Component: HealthInfoScreen },
  { slug: 'delivery',           title: 'Success / delivery',         node: '1576:6200',  Component: DeliveryConfirmationScreen },
  { slug: 'create-password',    title: 'Set up your password',       node: '1576:6345',  Component: CreatePasswordScreen },
];
