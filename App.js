import React, {Component} from "react";
import {View} from 'react-native'
import {Home} from './src/Home';
import {ProductDetailsWindow, OffersListWindow, DepartmentsListWindow, 
  ToolBar, PurchasesCartWindow, CategoryWindow} from './src/common/Index';
import {ProductView} from './src/common/subComponents/ProductView';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import {StackNavigator} from './src/StackNavigator'
import {TabNavigator} from './src/TabNavigator'



/*class App extends Component {
  render(){
    return(
      <View style={{backgroundColor: 'black'}}>
        <StackNavigator/>
        <TabNavigator/>
      </View>
    )
  }
}

export default App*/
const tabNavigator = createBottomTabNavigator({
  Home: Home,
  OffersListWindow: OffersListWindow,
  DepartmentsListWindow: DepartmentsListWindow,
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
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}
);
const stackNavigator = createStackNavigator(
  {
    Home: tabNavigator,
    ProductDetailsWindow: ProductDetailsWindow,
    ProductView: ProductView,
    ToolBar: ToolBar,
    CategoryWindow: CategoryWindow,
    PurchasesCartWindow: PurchasesCartWindow
    },{
    defaultNavigationOptions: {
      header: null
    }

    }
);

export default createAppContainer( stackNavigator);

 