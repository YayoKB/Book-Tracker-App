//Kate Blake ST10195711

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AdditionScreen} from './screens/AdditionScreen';
import {HomeScreen} from './screens/HomeScreen';
import {GenreScreen} from './screens/GenreScreen';
import {HistoryScreen} from './screens/HistoryScreen';

import {BookProvider} from './context/BookContext';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <BookProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={HomeScreen}
          backBehavior="history"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color}) => {
              let iconName;
              let rn = route.name;

              if (rn === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (rn === 'AddBook') {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              } else if (rn === 'Genres') {
                iconName = focused ? 'bookmarks' : 'bookmarks-outline';
              } else if (rn === 'History') {
                iconName = focused ? 'time' : 'time-outline';
              }

              return <Ionicons name={iconName} size={40} color={color} />;
            },

            tabBarShowLabel: false,
            headerShown: false,
            tabBarInactiveTintColor: '#DEE5E5',
            tabBarStyle: {backgroundColor: '#1A1A1A', height: 70},
            tabBarActiveTintColor: '#5EFFE2',
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="AddBook" component={AdditionScreen} />
          <Tab.Screen name="History" component={HistoryScreen} />
          <Tab.Screen name="Genres" component={GenreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </BookProvider>
  );
}

// export default App;
