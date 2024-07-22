import { View, Text, TextInput ,TouchableOpacity} from 'react-native'
import React,{useState}from 'react'
import { StyledText, StyledView } from '../NativeComponents/StyledViewText'
import { StyledComponent } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
interface SearchInputProps {
    placeholder: string;
    value: string | undefined;
    handleChangeText: (e: string) => void;
  }

const SearchInput = ({value,placeholder,handleChangeText}:SearchInputProps) => {
    return (
        <StyledView className='flex-row space-x-4 items-center border-2 border-gray-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-green-500'>
            <StyledComponent component={TextInput}
            className='flex-1 text-white mt-0.5 text-base items-center'
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            />
            <StyledComponent component={TouchableOpacity}
                //onPress={}
                >     
                <Ionicons color="#ffffff" name='search' size={24}/>
                </StyledComponent>
                
        </StyledView>
  )
}

export default SearchInput