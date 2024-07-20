import React from 'react'
import { Tabs } from 'expo-router'
import { StyledView, StyledText } from '@/components/NativeComponents/StyledViewText';
interface TabIconProps {
    icon: any; // or ImageSource (if using a library like react-native-fast-image)
    color: string;
    name: string;
    focused: boolean;
}
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <StyledView className='items-center justify-center gap-1'>
        <TabBarIcon size={20} name={icon}  color={color}/>
        <StyledText style={{color:color}} className={`${focused ? 'font-semibold':'font-normal'} text-xs`}>{name}</StyledText>
    </StyledView>
  );
};
const TabLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel:false,
                tabBarActiveTintColor:"#95FF31",
                tabBarInactiveTintColor:"#F5FFEB",
                tabBarStyle:{
                    backgroundColor:"#1a1a1a",
                    borderTopWidth:1,
                    //borderTopColor:""
                    height:84
                }
            }}
        >
            <Tabs.Screen 
            name='home'
            options={{
                title:"Home",
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                    name="Home"
                    icon={`${focused ? 'home' : 'home-outline'}`}
                    color={color}
                    focused={focused}
                    />
                )
            }}
            />
            <Tabs.Screen 
            name='bookmark'
            options={{
                title:"Bookmark",
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                    name="Bookmark"
                    icon={`${focused ? 'bookmarks' : 'bookmark-outline'}`}
                    color={color}
                    focused={focused}
                    />
                )
            }}
            />
            <Tabs.Screen 
            name='create'
            options={{
                title:"Create",
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                    name="Create"
                    icon={`${focused ? 'add-circle' : 'add-outline'}`}
                    color={color}
                    focused={focused}
                    />
                )
            }}
            />
            <Tabs.Screen 
            name='profile'
            options={{
                title:"Profile",
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                    name="Profile"
                    icon={`${focused ? 'person-circle' : 'person-outline'}`}
                    color={color}
                    focused={focused}
                    />
                )
            }}
            />
        </Tabs>
    </>
  )
}

export default TabLayout

