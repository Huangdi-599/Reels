import { View, Text, TextInput ,TouchableOpacity} from 'react-native'
import React,{useState}from 'react'
import { StyledText, StyledView } from '../NativeComponents/StyledViewText'
import { StyledComponent } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
interface FormFieldProps {
    title: string;
    placeholder: string;
    value: string | undefined;
    handleChangeText: (e: string) => void;
    Styles?: string;
    keyboardType:string

  }

const FormField = ({title,value,Styles,placeholder,handleChangeText}:FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)
    return (
    <StyledView className={`space-y-2 ${Styles}`}>
      <StyledText className='text-base text-gray-100 font-medium'>{title}</StyledText>
        <StyledView className='flex-row items-center border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-green-500'>
            <StyledComponent component={TextInput}
            className='flex-1 text-white font-semibold text-base'
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title ==='Password' && !showPassword}
            />
            {
              title === 'Password' &&   
                <StyledComponent component={TouchableOpacity}
                onPress={()=>setShowPassword(!showPassword)}
                >
                    {
                        showPassword ? <Ionicons color="#22c55e" name='eye-outline' size={24}/> :
                        <Ionicons color="#22c55e" name='eye-off-outline' size={24}/>
                    }
                </StyledComponent>
            }
                
        </StyledView>
    </StyledView>
  )
}

export default FormField