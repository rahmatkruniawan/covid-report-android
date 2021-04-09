import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {FormReportContainer, HomeContainer} from '@/Containers'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen name="FormLapor" component={FormReportContainer} />
    </Tab.Navigator>
  )
}

export default MainNavigator
