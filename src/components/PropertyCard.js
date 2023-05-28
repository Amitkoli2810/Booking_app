import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const PropertyCard = ({ rooms, children, adults, selectedDate, property, availableRooms }) => {
    const { width, height } = Dimensions.get('window')
    const navigation = useNavigation()

    return (
        <View>
            <Pressable onPress={()=>navigation.navigate('Info',{
                name:property.name,
                rating:property.rating,
                oldPrice:property.oldPrice,
                newPrice:property.newPrice,
                photos:property.photos,
                avilableRooms:property.rooms,
                adults:adults,
                children:children,
                rooms:rooms,
                selectedDate:selectedDate
            })} style={{ margin: 15, flexDirection: 'row', backgroundColor: 'white' }}>
                <View>
                    <Image source={{ uri: property.image }} style={{ width: width - 280, height: height / 3 }} />
                </View>
                <View style={{ padding: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ width: 200 }}>{property.name}</Text>
                        <AntDesign name="hearto" size={24} color="red" />
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',gap:6,marginTop:7}}>
                        <MaterialIcons name="stars" size={24} color="black" />
                        <Text>{property.rating}</Text>
                        <View style={{ backgroundColor: '#6CB4EE', padding: 4, borderRadius: 5, width: 100 }}>
                            <Text style={{textAlign:'center',color:'white',fontSize:15}}>Genius Level</Text>
                        </View>
                    </View>
                    <Text style={{width:200,marginTop:6,fontWeight:'bold',color:'gray'}}>{property.address.length > 50 ? property.address.substr(0,50):property.address}</Text>
                    <Text style={{marginTop:4,fontSize:15,fontWeight:'500'}}>Price for 1 night and {adults} Adults</Text>
                    <View style={{marginTop:5,flexDirection:'row',alignItems:'center',gap:8}}>
                        <Text style={{color:'red',fontSize:18,textDecorationLine:'line-through'}}>{property.oldPrice * adults}</Text>
                        <Text style={{fontSize:18}}> Rs {property.newPrice * adults}</Text>
                    </View>
                    <View style={{marginTop:3}}>
                        <Text style={{fontSize:16,color:'gray'}}>Deluxe Room</Text>
                        <Text style={{fontSize:16,color:'gray'}}>Hotel Room : 1 bed</Text>
                    </View>
                    <View style={{ backgroundColor: '#6082B6', padding: 4, borderRadius: 5, width: 170 }}>
                        <Text style={{textAlign:'center',color:'white',fontSize:15}}>Limited Time Deal</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default PropertyCard

const styles = StyleSheet.create({})