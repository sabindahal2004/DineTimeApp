import {useRouter} from 'expo-router';
import {Formik} from 'formik';
import React from 'react';
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import validationSchema from '../../utils/authSchema';
const Signin = () => {
  const router = useRouter();
  const handleSignin = () => {};
  const handleTestSubmit = () => {};
  return (
    <SafeAreaView className={'bg-[#2b2b2b]'}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#2b2b2b'} />
      <View style={{height: '100%'}}>
        <View className="m-2 flex justify-center items-center">
          <Image
            source={require('../../assets/images/dinetimelogo.png')}
            style={{height: 100, width: 200}}
          />
          <Text className="text-lg text-white font-bold text-center mb-10">
            Let&apos;s get you started
          </Text>

          <View className="w-5/6">
            <Formik
              initialValues={{email: '', password: ''}}
              validationSchema={validationSchema}
              onSubmit={handleSignin}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View className="w-full">
                  <Text className="text-[#f49b33] mt-4 mb-2">Email</Text>
                  <TextInput
                    className="h-15 border border-white text-white rounded px-2"
                    keyboardType="email-address"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  {touched.email && errors.email && (
                    <Text className="text-red-500 text-xs mb-2">
                      {errors.email}
                    </Text>
                  )}

                  <Text className="text-[#f49b33] mt-4 mb-2">Password</Text>
                  <TextInput
                    secureTextEntry
                    className="h-15 border border-white text-white rounded px-2"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />
                  {touched.password && errors.password && (
                    <Text className="text-red-500 text-xs mb-2">
                      {errors.password}
                    </Text>
                  )}
                  <TouchableOpacity
                    onPress={handleTestSubmit}
                    className="p-2 bg-[#f49b33] rounded-lg text-black  mt-8 mb-2">
                    <Text className="text-lg font-semibold text-center">
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
            <View className="flex flex-row justify-center ">
              <Text className="text-base font-semibold text-white">
                Don&apos;t have an account?
              </Text>
              <TouchableOpacity onPress={() => router.push('/signup')}>
                <Text className="text-base font-semibold underline text-[#f49b33] px-2">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text className="text-center text-base font-semibold my-4 text-white">
                <View className="border-b-2 border-[#f49b33] w-24 p-2 mb-1" />{' '}
                <Text>or </Text>
                <View className="border-b-2 border-[#f49b33] w-24 p-2 mb-1" />
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => router.push('/home')}
              className="p-2 border-[#f49b33] border rounded-lg my-4 max-w-fit">
              <Text className="text-lg font-semibold text-center text-[#f49b33]">
                Guest User
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-1">
          <Image
            source={require('../../assets/images/Frame.png')}
            resizeMode="contain"
            className="h-full w-full"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
