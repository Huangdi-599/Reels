import {TouchableOpacity} from 'react-native'
import React from 'react'
import { StyledText } from '../NativeComponents/StyledViewText';
import { StyledComponent } from 'nativewind';
interface RealButtonProps {
    title: string;
    handlePress: () => void;
    Styles: string;
    isLoading:boolean;
    textStyles:string;
}
const ReelsButton = ({title, handlePress,Styles,isLoading,textStyles}:RealButtonProps) => {
  return (
    <StyledComponent component={TouchableOpacity}
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    className={`bg-primary rounded-xl min-h-[62px] justify-center items-center ${Styles} ${isLoading ? 'opacity-50' : ''}`}>
    <StyledText className={`text-primaryBlack font-semibold text-lg ${textStyles}`}>{title}</StyledText>
    </StyledComponent>
  )
}

export default ReelsButton