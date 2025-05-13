import {View, Text} from 'react-native';
import React from 'react';
import {Tabs} from 'expo-router';
import {Colors} from '../../assets/Colors';
import Icon from '@expo/vector-icons/Ionicons';

const BottomTab = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.dark.text,
        tabBarStyle: {
          backgroundColor: Colors.SECONDARY,
          paddingBottom: 14,
          height: 75,
        },
        tabBarLabel: '',
      }}>
      <Tabs.Screen
        name="home"
        options={{title: 'Home', tabBarIcon : ({color,focused}) => (
            <Icon name='home' color={color} size={24} />
        )}}
      />
      <Tabs.Screen name="history" options={{title: 'History',tabBarIcon : ({color,focused}) => (
            <Icon name='time' color={color} size={24} />
        )}} />
      <Tabs.Screen name="profile" options={{title: 'Profile',tabBarIcon : ({color,focused}) => (
            <Icon name='person-sharp' color={color} size={24} />
        )}} />
    </Tabs>
  );
};

export default BottomTab;
