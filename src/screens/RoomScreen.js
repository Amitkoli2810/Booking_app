import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import Aminities from '../components/Aminities';
import { Entypo } from '@expo/vector-icons';
const RoomScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const [selected, setSelected] = useState([])
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: 'Available Rooms',
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
    return (
        <>
            <ScrollView>
                {
                    route.params.avilableRooms.map((item, index) => (
                        <Pressable style={{ backgroundColor: 'white', padding: 10, margin: 10 }} key={index}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#007FFF', fontWeight: '500', fontSize: 17 }}>{item.name}</Text>
                                <AntDesign name="infocirlceo" size={24} color="#007FFF" />
                            </View>
                            <Text style={{ marginTop: 3, fontSize: 16 }}>Pay at the Property</Text>
                            <Text style={{ marginTop: 3, color: 'green', fontSize: 16 }}>Free cancellation Available</Text>
                            <View style={{ marginTop: 3, flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <Text style={{ fontSize: 16, color: 'red', textDecorationLine: 'line-through' }}>{route.params.oldPrice}</Text>
                                <Text style={{ fontSize: 16 }}>Rs {route.params.newPrice}</Text>
                            </View>
                            <Aminities />
                            {
                                selected.includes(item.name) ?
                                    (
                                        <Pressable style={{ borderColor: '#318CE7', backgroundColor: '#F0F8FF', borderWidth: 2, width: "100%", padding: 10, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 16, fontWeight: '700', color: 'blue', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>SELECTED</Text>
                                            <Entypo onPress={() => setSelected([])} name="cross" size={24} color="red" />
                                        </Pressable>
                                    )
                                    :
                                    (<Pressable onPress={() => setSelected(item.name)} style={{ borderColor: 'blue', borderWidth: 2, alignItems: 'center', borderRadius: 5, padding: 10 }}>
                                        <Text style={{ fontSize: 16, fontWeight: '700', color: 'blue' }}>SELECT</Text>
                                    </Pressable>)
                            }
                        </Pressable>
                    ))
                }
            </ScrollView>
            {
                selected.length > 0 ?
                    (
                        <Pressable onPress={() => navigation.navigate('User', {
                            avilableRooms: route.params.avilableRooms,
                            oldPrice: route.params.oldPrice,
                            newPrice: route.params.newPrice,
                            name: route.params.name,
                            children: route.params.children,
                            adults: route.params.adults,
                            rating: route.params.rating,
                            endDate: route.params.endDate,
                            startDate: route.params.startDate
                        })} style={{ backgroundColor: '#007FFF', padding: 15, marginBottom: 18, borderRadius: 6, marginHorizontal: 20 }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Reserve</Text>
                        </Pressable>
                    )
                    :
                    null

            }
        </>
    )
}

export default RoomScreen

const styles = StyleSheet.create({})