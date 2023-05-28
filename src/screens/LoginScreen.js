import { Alert, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()
    // const login = () => {
    //     if (email == '' || password == '') {
    //         Alert.alert('Invalid Details', 'Please Fill all deatils', [
    //             {
    //                 text: 'Cancel',
    //                 onPress: () => console.log('Cancel Pressed'),
    //                 style: 'cancel',
    //             },
    //             { text: 'OK', onPress: () => console.log('OK Pressed') },
    //         ]);
    //     } else {
    //         signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    //             console.log('user credential', userCredential)
    //             const user = userCredential.user
    //             console.log('user details', user)
    //         })
    //     }
    // }
    const login = () => {
        if (email == '' || password == '') {
          Alert.alert('Invalid Details', 'Please fill in all details', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        } else {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log('User details:', user);
            })
            .catch((error) => {
              console.log('Login error:', error);
              Alert.alert('Invalid Details', 'Incorrect  details', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ]);
            });
        }
      };
      
    useEffect(() => {
        try {
            const unsubscribe = auth.onAuthStateChanged((authUser) => {

                if (authUser) {
                    navigation.navigate("Main")
                }
            })
            return unsubscribe
        } catch (e) {
            console.log(e)
        }

    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 10, alignItems: 'center' }}>
            <KeyboardAvoidingView>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                    <Text style={{ color: '#003580', fontSize: 17, fontWeight: '700' }}>Sign In</Text>
                    <Text style={{ marginTop: 15, fontSize: 18, fontWeight: '500' }}>Sign In to Your Account</Text>
                </View>
                <View style={{ marginTop: 50 }}>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: 'gray' }}>Email</Text>
                        <TextInput onChangeText={(text) => setEmail(text)} value={email} placeholder='Enter Your Email' placeholderTextColor={'black'} style={{ borderBottomWidth: 1, borderBottomColor: 'gray', marginVertical: 10, width: 300 }} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: 'gray' }}>Password</Text>
                        <TextInput secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)} value={password} placeholder='Enter Your Password' placeholderTextColor={'black'} style={{ borderBottomWidth: 1, borderBottomColor: 'gray', marginVertical: 10, width: 300 }} />
                    </View>
                </View>
                <Pressable onPress={login} style={{ width: 200, backgroundColor: '#003580', padding: 15, borderRadius: 7, marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>Login</Text>
                </Pressable>
                <Pressable style={{ marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', color: 'gray', fontSize: 17 }}>Don't have an account? <Text onPress={() => navigation.navigate('Register')} style={{ color: 'blue' }}>Sign Up</Text></Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})