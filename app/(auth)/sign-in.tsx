import { StatusBar,ScrollView, Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledImage, StyledText, StyledView } from '@/components/NativeComponents/StyledViewText'
import { StyledComponent } from 'nativewind'
import logo from '@/assets/images/reels.png'
import FormField from '@/components/Shared/FormField'
import {useState} from 'react'
import ReelsButton from '@/components/Shared/ReelsButton'
import { Link,router } from 'expo-router'
import {getUserDetail, signIn} from '@/lib/appwrite'
import { useGlobalContext } from '@/contexts/GlobalProvider'
const SignIn = () => {
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm]=useState({
    email:'',
    password:''
  })
  const {setIsLoggedIn, setUser}=useGlobalContext()
  const submit = async ()=>{
    if (!form.password || !form.email){
      Alert.alert('Error', 'Please fill in all the fields')
    }
    setSubmitting(true)
    try {
      await signIn(
        form.email,
        form.password,
      )
      const response = await getUserDetail()
      setUser(response)
      setIsLoggedIn(true)
      Alert.alert("Success", "Signed in  successfully")
      router.replace('/home')
    } catch (error:any) {
      Alert.alert('Error',error.message)
    }finally{
      setSubmitting(false)
    }

  }
  return (
    <StyledView className='bg-primaryBlack h-full'>
      <ScrollView>
        <StyledView className="w-full justify-center !min-h-[85vh] px-4 my-6">
          <StyledImage source={logo} 
          className='w-[115px] h-[35px]'
          resizeMode='contain'
          />
          <StyledText className='font-semibold text-2xl text-white mt-10'>
            Log in to Reels
          </StyledText>
          <FormField
          title='Email'
          value={form?.email}
          placeholder='Enter email...'
          handleChangeText={(e)=>setForm({...form, email:e})}
          keyboardType = "email-address"
          Styles="mt-7"
          />
          <FormField
          title='Password'
          keyboardType = ""
          placeholder='****'
          value={form?.password}
          handleChangeText={(e)=>setForm({...form, password:e})}
          Styles="mt-7"
          />
          <ReelsButton 
          title='Sign In'
          handlePress={submit}
          Styles='mt-7'
          textStyles=''
          isLoading={submitting}
          />
          <StyledView className='justify-center pt-5 flex-row gap-2'>
            <StyledText className='text-lg text-gray-100 font-regular'>
              Don't have account ?
            </StyledText>
            <StyledComponent className='text-secondary text-lg font-semibold' component={Link} href='/sign-up'>
              Sign Up
            </StyledComponent>
          </StyledView>
        </StyledView>
      </ScrollView>
      <StatusBar backgroundColor={'#F5FFEB'}
      barStyle={'light-content'}
      />
    </StyledView>

  )
}

export default SignIn
