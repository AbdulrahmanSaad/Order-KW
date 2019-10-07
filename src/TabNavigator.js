import React from 'react'
import  { createBottomTabNavigator } from 'react-navigation-tabs'
import { OffersListWindow, DepartmentsListWindow, PurchasesCartWindow} from './common/Index'
import {Home} from './Home'
import { Ionicons } from '@expo/vector-icons'
import {createAppContainer} from 'react-navigation';

    const TabNavigator = createAppContainer(createBottomTabNavigator({
        Home: Home,
        OffersListWindow: OffersListWindow,
        DepartmentsListWindow: DepartmentsListWindow,
        PurchasesCartWindow: PurchasesCartWindow
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            if (routeName === 'Home') {
             iconName = 'md-home';
            } else if (routeName === 'OffersListWindow') {
              iconName = `ios-options`;
            }
            else if (routeName === 'DepartmentsListWindow') {
              iconName = `ios-options`;
            }
            else if (routeName === 'PurchasesCartWindow') {
              iconName = `ios-options`;
            }
            return <Ionicons name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
      }
      ))

      export {TabNavigator}
