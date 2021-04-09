import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FormReportContainer, HomeContainer} from "@/Containers";

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  return (
	<Tab.Navigator>
		<Tab.Screen name="Home" component={HomeContainer} />
    	<Tab.Screen name="Settings" component={FormReportContainer} />
	</Tab.Navigator>
  );
}
