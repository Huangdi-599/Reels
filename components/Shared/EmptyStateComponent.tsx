import { View, Text } from 'react-native'
import React from 'react'
import { StyledImage, StyledView } from '../NativeComponents/StyledViewText'
const EmptyStateComponent = () => {
  return (
    <StyledView className='border-2 border-white justify-center items-center px-4'>
        <StyledImage
        source={require('@/assets/images/search.png')}
        className='w-[270px] h-[215px]'
        resizeMode='contain'
        />
    </StyledView>
  )
}

export default EmptyStateComponent