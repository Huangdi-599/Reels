import { SafeAreaView, StyleSheet, StatusBar,Text, View } from 'react-native'
import React from 'react'
import { StyledComponent } from 'nativewind'
import { StyledFlatList, StyledImage, StyledText, StyledView } from '@/components/NativeComponents/StyledViewText'
import { useGlobalContext } from '@/contexts/GlobalProvider'
import SearchInput from '@/components/Shared/SearchInput'
import Trending from '@/components/Shared/Trending'
import EmptyStateComponent from '@/components/Shared/EmptyStateComponent'
interface trendPostType {
  id: number
}
const trendingPosts:trendPostType[] =[
  {id:1}
  ,{id:2}, 
  {id:3}
]

const Home = () => {
  const {user}= useGlobalContext()
  return (
   <StyledComponent className='bg-primaryBlack ' component={SafeAreaView}>
      <StyledFlatList
        className='text-gray-100'
        data={[]}
        // data={[{id:1}, {id:2}, {id:3}]}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>(
          <StyledText className='text-3xl text-gray-100'>{item.id}</StyledText>
        )}
        ListHeaderComponent={()=>(
          <StyledView className='my-6 px-4 space-y-6'>
            <StyledView className='justify-between items-start flex-row mb-6'>
              <StyledView>
                <StyledText className='font-medium text-sm text-gray-100'>
                  Welcome Back 
                </StyledText>
                <StyledText className='text-2xl font-semibold text-gray-100'>
                  {user?.$id}
                </StyledText>
              </StyledView>
              <StyledView className='mt-1.5'>
                <StyledImage
                className='w-9 h-10'
                resizeMode='contain'
                source={require('@/assets/images/reels.png')}
                />
              </StyledView>
            </StyledView>
            <SearchInput 
            placeholder='Search videos ....'
            />
            <StyledView className='w-full flex-1 pt-5 pb-8'>
              <StyledText className='text-gray-100 text-lg mb-3'>
                Latest Videos
              </StyledText>
              <Trending trendingPosts={trendingPosts ?? []}/>
            </StyledView>
          </StyledView>
        )}
        ListEmptyComponent={()=>(
          <EmptyStateComponent />
        )}
      />
      <StatusBar backgroundColor={'#F5FFEB'}
      barStyle={'light-content'}
      />
   </StyledComponent>
  )
}

export default Home

const styles = StyleSheet.create({})