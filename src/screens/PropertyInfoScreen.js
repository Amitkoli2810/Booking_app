import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { pixelNormalize } from '../components/Normalise'
import { MaterialIcons } from '@expo/vector-icons';
import Aminities from '../components/Aminities';


const PropertyInfoScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
   
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: `${route.params.name}`,
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
    const difference = route.params.oldPrice - route.params.newPrice
    const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100

    return (
        <View>
            <ScrollView>
                <Pressable style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    {route.params.photos.slice(0, 5).map((photo,index) => (
                        <View style={{ margin: 7 }} key={index}>
                            <Image style={{ width: 110, height: 100, borderRadius: 10 }} source={{ uri: photo.image }} />
                        </View>
                    ))}
                    <Pressable style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', marginLeft: 20 }}>Show More</Text>
                    </Pressable>
                </Pressable>
                <View style={{ marginHorizontal: 12, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{route.params.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 7 }}>
                            <MaterialIcons name="stars" size={24} color="green" />
                            <Text>{route.params.rating}</Text>
                            <View style={{ backgroundColor: '#6CB4EE', padding: 4, borderRadius: 5, width: 100 }}>
                                <Text style={{ textAlign: 'center', color: 'white', fontSize: 15 }}>Genius Level</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#17B169', padding: 7, borderRadius: 6 }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>Travel sustainable</Text>
                    </View>
                </View>
                <Text style={{ borderColor: '#E0E0E0', borderWidth: 1, height: 1, marginTop: 15 }} />
                <Text style={{ marginTop: 20, marginHorizontal: 12, fontSize: 15, fontWeight: '500' }}>
                    Price for 1 Night and {route.params.adults} adults
                </Text>
                <View style={{
                    marginTop: 5, flexDirection: 'row', alignItems: 'center', marginHorizontal: 12,
                    marginTop: 12, gap: 8
                }}>

                    <Text style={{ color: 'red', fontSize: 18, textDecorationLine: 'line-through' }}>{route.params.oldPrice * route.params.adults}</Text>
                    <Text style={{ fontSize: 18 }}> Rs {route.params.newPrice * route.params.adults}</Text>
                </View>
                <View style={{ marginHorizontal: 12, marginTop: 4, backgroundColor: 'green', padding: 5, width: 80, borderRadius: 5 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>{offerPrice.toFixed(0)} % OFF</Text>
                </View>
                <Text style={{ borderColor: '#E0E0E0', borderWidth: 1, height: 1, marginTop: 10 }} />
                <View style={{ margin: 12, flexDirection: 'row', gap: 60, alignItems: 'center' }}>
                    <View >
                        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 1 }}>Check In</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#007FFF' }}>{route.params.selectedDate.startDate}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 1 }}>Check Out</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#007FFF' }}>{route.params.selectedDate.endDate}</Text>
                    </View>
                </View>
                <View style={{margin:12}}>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 2 }}> Rooms and Guests </Text>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: '#007FFF' }}>{route.params.rooms} Rooms {route.params.adults} Adults {route.params.children} Children </Text>
                </View>
                <Text style={{ borderColor: '#E0E0E0', borderWidth: 1, height: 1, marginTop: 15 }} />
                <Aminities/>
               
                <View style={{marginBottom:50}}></View>
            </ScrollView>
            <Pressable onPress={()=>navigation.navigate('Rooms',{
                avilableRooms:route.params.avilableRooms,
                oldPrice:route.params.oldPrice,
                newPrice:route.params.newPrice,
                name:route.params.name,
                children:route.params.children,
                adults:route.params.adults,
                rating:route.params.rating,
                endDate:route.params.selectedDate.endDate,
                startDate:route.params.selectedDate.startDate
            })} style={{backgroundColor:'#6CB4EE',width:'95%',alignItems:'center',padding:20,position:'absolute',bottom:1,left:10,borderRadius:20}}>
                <Text style={{fontWeight:'bold',fontSize:15,color:'white'}}>Select Availability</Text>
            </Pressable>
        </View>
    )
}

export default PropertyInfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
})