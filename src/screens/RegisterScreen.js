import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { doc, setDoc } from 'firebase/firestore'

const RegisterScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const navigation = useNavigation()
    const register = () => {
        if (email === "" || password === "" || phone === "") {
            Alert.alert("Invalid Details", "Please fill in all details", [
                {
                    text: "OK",
                    onPress: () => console.log("OK Pressed"),
                },
            ]);
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {
                    const user = userCredentials.user;
                    const uid = user.uid;
                    setDoc(doc(db, "users", uid), {
                        email: user.email,
                        phone: phone,
                    });
                })
                .catch((error) => {
                    // Handle any errors that occur during registration
                    console.log("Registration Error:", error);

                });
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 10, alignItems: 'center' }}>
            <KeyboardAvoidingView>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <Text style={{ color: '#003580', fontSize: 17, fontWeight: '700' }}>Register</Text>
                    <Text style={{ marginTop: 15, fontSize: 18, fontWeight: '500' }}>Create a new Account</Text>
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
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: 'gray' }}>Phone No</Text>
                        <TextInput onChangeText={(text) => setPhone(text)} value={phone} placeholder='Enter Phone No' placeholderTextColor={'black'} style={{ borderBottomWidth: 1, borderBottomColor: 'gray', marginVertical: 10, width: 300 }} />
                    </View>
                </View>
                <Pressable onPress={register} style={{ width: 200, backgroundColor: '#003580', padding: 15, borderRadius: 7, marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>Register</Text>
                </Pressable>
                <Pressable style={{ marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', color: 'gray', fontSize: 17 }}>Already have an account? <Text onPress={() => navigation.navigate('Login')} style={{ color: 'blue' }}>Sign In</Text></Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})