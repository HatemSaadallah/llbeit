import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'HomeStore',
          Carts: 'MyCart',
          Notification: 'Notification',
          About: 'About',
          Payment: 'Payement',
        },
      },
    },
  });
}
