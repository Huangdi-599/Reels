import React from 'react'
import { Stack } from 'expo-router'
import GlobalProvider from '@/contexts/GlobalProvider'
import { useGlobalContext } from '@/contexts/GlobalProvider'
const RootLayout = () => {
  return (
    <GlobalProvider>
      <Stack>
          <Stack.Screen name="index" options={{
              headerShown:false
          }} />
          <Stack.Screen name="(auth)" options={{
              headerShown:false
          }} />
          <Stack.Screen name="(tabs)" options={{
              headerShown:false
          }} />
      </Stack>    
    </GlobalProvider>

  )
}

export default RootLayout