import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import HomeStore from '../screens/HomeStore'
import NotificationPage from '../screens/NotificationPage';
import Aboutus from '../screens/Aboutus';

// import icon from '@material-ui/core/icon'
import NotificationsIcon from '@material-ui/icons/Notifications';
import MyCart from '../screens/MyCart';
import InfoIcon from '@material-ui/icons/Info';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={'Home'}>
    
      <BottomTab.Screen
        name="About"
        component={Aboutus}
        options={{
          title: 'عن الفريق',
          tabBarIcon: ({ focused }) => <InfoIcon  />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationPage}
        options={{
          title: 'الإشعارات',
          tabBarIcon: ({ focused }) => <NotificationsIcon  />,
        }}
      />
      <BottomTab.Screen
        name="MyCarts"
        component={MyCart}
        options={{
          title: 'سلة المشتريات',
          tabBarIcon: ({ focused }) => <ShoppingCartIcon />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeStore}
        options={{
          title: 'الرئيسية',
          tabBarIcon: ({ focused }) => <HomeIcon />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'الرئيسية';
    case 'MyCarts':
      return 'سلة المشتريات';
    case 'الإشعارات':
      return 'Notifications';
    case 'عن الفريق':
      return 'About Us!';
    default:
      return "Default"
  }
}
