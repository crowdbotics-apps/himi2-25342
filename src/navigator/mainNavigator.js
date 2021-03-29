import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen49219652Navigator from '../features/BlankScreen49219652/navigator';
import Maps219634Navigator from '../features/Maps219634/navigator';
import Additem219633Navigator from '../features/Additem219633/navigator';
import Maps219629Navigator from '../features/Maps219629/navigator';
import UserProfile219625Navigator from '../features/UserProfile219625/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
BlankScreen49219652: { screen: BlankScreen49219652Navigator },
Maps219634: { screen: Maps219634Navigator },
Additem219633: { screen: Additem219633Navigator },
Maps219629: { screen: Maps219629Navigator },
UserProfile219625: { screen: UserProfile219625Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
