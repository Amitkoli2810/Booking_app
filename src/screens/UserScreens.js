import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const UserScreens = () => {
    const route = useRoute()
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: 'User Details',
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#003580',
                height: 110,
                borderBottomColor: "transparent",
                shadowColor: "transparent"
            },
        })
    }, [])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const finalStep=()=>{
        if(!firstName || !lastName || !email || !number){
            Alert.alert('Invalid Details', 'Please Fill all deatils', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }
        if(firstName && lastName && email && number){
            navigation.navigate('Confirm', {
                avilableRooms: route.params.avilableRooms,
                oldPrice: route.params.oldPrice,
                newPrice: route.params.newPrice,
                name: route.params.name,
                children: route.params.children,
                adults: route.params.adults,
                rating: route.params.rating,
                endDate: route.params.endDate,
                startDate: route.params.startDate
            })
        }
    }
    return (
        <>
            <View style={{ padding: 20 }}>
                <View style={{ flexDirection: 'column', gap: 10 }}>
                    <Text>First Name</Text>
                    <TextInput value={firstName} onChangeText={(text) => setFirstName(text)} style={{ padding: 10, borderColor: 'gray', borderWidth: 1 }} />
                </View>

                <View style={{ flexDirection: 'column', gap: 10, marginTop: 10 }}>
                    <Text>Last Name</Text>
                    <TextInput value={lastName} onChangeText={(text) => setLastName(text)} style={{ padding: 10, borderColor: 'gray', borderWidth: 1 }} />
                </View>

                <View style={{ flexDirection: 'column', gap: 10, marginTop: 10 }}>
                    <Text>Email</Text>
                    <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{ padding: 10, borderColor: 'gray', borderWidth: 1 }} />
                </View>

                <View style={{ flexDirection: 'column', gap: 10, marginTop: 10 }}>
                    <Text>Phone No</Text>
                    <TextInput value={number} onChangeText={(text) => setNumber(text)} style={{ padding: 10, borderColor: 'gray', borderWidth: 1 }} />
                </View>
            </View>
            <Pressable style={{ backgroundColor: 'white', marginTop: 'auto', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, padding: 20 }}>
                <View>
                    <View style={{
                        marginTop: 5, flexDirection: 'row', alignItems: 'center',
                        marginTop: 12, gap: 8
                    }}>

                        <Text style={{ color: 'red', fontSize: 18, textDecorationLine: 'line-through' }}>{route.params.oldPrice * route.params.adults}</Text>
                        <Text style={{ fontSize: 18 }}> Rs {route.params.newPrice * route.params.adults}</Text>
                    </View>
                    <Text>You saved {route.params.oldPrice - route.params.newPrice} Rupees</Text>
                </View>
                <Pressable >
                    <Text style={{ backgroundColor: '#007FFF', borderRadius: 10, padding: 10, textAlign: 'center', color: 'white', fontSize: 15 }}
                        onPress={finalStep}
                    >Final Step</Text>
                </Pressable>
            </Pressable>
        </>
    )
}

export default UserScreens

const styles = StyleSheet.create({})