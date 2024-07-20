import { StatusBar,ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import { StyledImage, StyledText, StyledView } from '@/components/NativeComponents/StyledViewText'
import { StyledComponent } from 'nativewind'
import logo from '@/assets/images/reels.png'
import FormField from '@/components/Shared/FormField'
import {useState} from 'react'
import ReelsButton from '@/components/Shared/ReelsButton'
import { Link , router} from 'expo-router'
import {createUser} from '@/lib/appwrite'

const SignUp = () => {
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm]=useState({
    username:'',
    email:'',
    password:''
  })
  const submit = async ()=>{
    if (!form.username || !form.password || !form.email){
      Alert.alert('Error', 'Please fill in all the fields')
    }
    setSubmitting(true)
    try {
      const response = await createUser(
        form.email,
        form.password,
        form.username
      )
      console.log(response)
      //Set to Global state
      router.replace('/home')
    } catch (error:any) {
      Alert.alert('Error',error.message)
    }finally{
      setSubmitting(false)
    }

  }
  console.log(form)
  return (
    <StyledView className='bg-primaryBlack h-full'>
      <ScrollView>
        <StyledView className="w-full justify-center !min-h-[85vh] px-4 my-6">
          <StyledImage source={logo} 
          className='w-[115px] h-[35px]'
          resizeMode='contain'
          />
          <StyledText className='font-semibold text-2xl text-white mt-10'>
            Create an account on Reels
          </StyledText>
          <FormField
          title='Username'
          value={form?.username}
          placeholder='Enter Username...'
          handleChangeText={(e)=>setForm({...form, username:e})}
          keyboardType = "username"
          Styles="mt-7"
          />
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
          title='Sign Up'
          handlePress={submit}
          Styles='mt-7'
          textStyles=''
          isLoading={submitting}
          />
          <StyledView className='justify-center pt-5 flex-row gap-2'>
            <StyledText className='text-lg text-gray-100 font-regular'>
              Have an account already ?
            </StyledText>
            <StyledComponent className='text-secondary text-lg font-semibold' component={Link} href='/sign-in'>
              Sign In
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

export default SignUp
