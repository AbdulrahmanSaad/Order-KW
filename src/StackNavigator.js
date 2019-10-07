import React from 'react'
import  {createStackNavigator} from 'react-navigation-stack'
import {ProductView} from './common/subComponents/ProductView'
import { ProductDetailsWindow} from './common/Index'
import {Home} from './Home'
import {createAppContainer} from 'react-navigation';



const StackNavigator = createAppContainer(createStackNavigator(
    {
      Home: Home,
      ProductDetailsWindow: ProductDetailsWindow,
      ProductView: ProductView,
      //ToolBar: ToolBar
      }
  ))

  export {StackNavigator}



