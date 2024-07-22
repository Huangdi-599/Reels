import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledFlatList, StyledText, StyledView } from '../NativeComponents/StyledViewText'
interface trendPostType {
    id: number
}

interface TrendingProps {
    trendingPosts:trendPostType[]
}
const Trending = ({trendingPosts}:TrendingProps) => {
  return (
    <StyledFlatList
     horizontal
     data={trendingPosts}
     key={(item) => item.id}
     renderItem={({item})=>(
        <StyledText className='text-3xl text-gray-100'>{item.id}</StyledText>
      )}
    />

  )
}

export default Trending

const styles = StyleSheet.create({})