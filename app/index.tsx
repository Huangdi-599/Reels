import { StatusBar, Text, View ,ScrollView, Image} from 'react-native'
import React from 'react'
import {Redirect, router } from 'expo-router'
import { StyledComponent } from 'nativewind'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from '@/assets/images/reels.png'
import ReelsButton from '@/components/Shared/ReelsButton'
import { StyledImage } from '@/components/NativeComponents/StyledViewText'
import { useGlobalContext } from '@/contexts/GlobalProvider'
const App = () => {
  const {isLoading, isLoggedIn} = useGlobalContext()

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />
  return (
    <StyledComponent component={SafeAreaView} className='bg-[#1a1a1a] h-full'>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <StyledComponent className='w-full justify-center items-center h-full px-4' component={View}>
            <StyledImage className='w-[130px] h-[84px]'
            source={logo}
            resizeMode='contain'
            />
            <StyledComponent component={View} className='relative mt-5'>
              <StyledComponent component={Text} className='text-3xl text-white font-bold text-center'>
                Discover Endless Possibilities with{' '}
                <StyledComponent component={Text} className='text-primary'>
                Reels
                </StyledComponent>
              </StyledComponent>
            </StyledComponent>
            <StyledComponent component={Text} className='text-white mt-7'>
            Where creativity meets innovation: embark on a journey of limitless exploration with Reels
            </StyledComponent>
            <ReelsButton 
            title ="Get Started"
            handlePress={()=>{router.push("/sign-in")}}
            Styles="w-full mt-7"
            isLoading={false}
            textStyles=''
            />
        </StyledComponent>
      </ScrollView>
      <StatusBar backgroundColor={'#F5FFEB'}
      barStyle={'light-content'}
      />
    </StyledComponent>
  )
}

export default App

