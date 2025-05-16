import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useRouter} from 'expo-router';
import {SafeAreaView} from 'react-native-safe-area-context';

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className={'bg-[#2b2b2b]'}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#2b2b2b'} />
      <View style={{height: '100%'}}>
        <View className="m-2 flex justify-center items-center">
          <Image
            source={require('../assets/images/dinetimelogo.png')}
            style={{height: 300, width: 300}}
          />
          <View className="w-3/4">
            {/* Sign Up */}
            <TouchableOpacity
              onPress={() => router.push('/signup')}
              className="p-2 bg-[#f49b33] rounded-lg text-black ">
              <Text className="text-lg font-semibold text-center">Sign Up</Text>
            </TouchableOpacity>
            {/* Guest User */}
            <TouchableOpacity
              onPress={() => router.push('/home')}
              className="p-2 border-[#f49b33] border rounded-lg my-4 max-w-fit">
              <Text className="text-lg font-semibold text-center text-[#f49b33]">
                Guest User
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text className="text-center text-base font-semibold my-4 text-white">
              <View className="border-b-2 border-[#f49b33] w-24 p-2 mb-1" />{' '}
              <Text>or </Text>
              <View className="border-b-2 border-[#f49b33] w-24 p-2 mb-1" />
            </Text>

            <View className="flex flex-row justify-center ">
              <Text className="text-base font-semibold text-white">
                Already a User?
              </Text>
              <TouchableOpacity onPress={() => router.push('/signin')}>
                <Text className="text-base font-semibold underline text-[#f49b33] px-2">
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="flex-1">
          <Image
            source={require('../assets/images/Frame.png')}
            resizeMode="contain"
            className="h-full w-full"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
