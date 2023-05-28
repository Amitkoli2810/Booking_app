import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';

import { BottomModal, ModalButton, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';



const HomeScreens = () => {
    const [selectedDate, setSelectedDate] = useState()

    const [rooms, setRooms] = useState(1)
    const [adults, setAdults] = useState(1)
    const [children, setChildren] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)
    const navigation = useNavigation()
    const route = useRoute()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Booking.com",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: 'white',
                marginTop:-20
            },
            headerStyle: {
                backgroundColor: '#003580',
                height: 70,
                borderBottomColor: "transparent",
                shadowColor: "transparent"
            },
            headerRight: () => (
                <Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 20 }} />
            )

        })
    }, [])
    const customButton = (onConfirm) => {
        return (
            <Button onPress={onConfirm} style={{ container: { width: '80%', marginhorizontal: '3%' }, text: { fontSize: 15 } }} primary title="Submit" />
        )
    }
    const searchPlaces =(place)=>{
        if(!route.params || !selectedDate){
            Alert.alert('Invalid Details', 'Please Fill all deatils', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }
        if(route.params && selectedDate){
            navigation.navigate('Places',{
                rooms:rooms,
                adults:adults,
                children:children,
                selectedDate:selectedDate,
                place:place
            })
        }
    }

    return (
        <>
            <View >
                <Header />
                <ScrollView>
                    <View style={{ margin: 20, borderColor: '#FFC72C', borderWidth: 3, borderRadius: 6 }}>
                        <Pressable onPress={()=>navigation.navigate('Search')} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, borderColor: '#FFC72C', borderWidth: 2, paddingVertical: 15 }}>
                            <Feather name="search" size={24} color="black"  />
                            {/* <TextInput placeholderTextColor='black' placeholder={route?.params ? route?.params?.input : 'Enter Your Destination'} /> */}
                            <Text> {route?.params ? route?.params?.input : 'Enter Your Destination'}</Text>
                        </Pressable>
                        <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, borderColor: '#FFC72C', borderWidth: 2, paddingVertical: 15 }}>
                            <Entypo name="calendar" size={24} color="black" />
                            <DatePicker
                                style={{ width: '80%', height: 30, borderRadius: 0, borderWidth: 0 }}
                                customStyles={{
                                    placeholderText: { fontSize: 15, flexDirection: 'row', alignItems: 'center', marginRight: 'auto' },// placeHolder style
                                    headerStyle: {
                                        backgroundColor: '#003580'
                                    }
                                }}
                                centerAlign // optional text will align center or notb
                                selectedBgColor='#0047AB'
                                allowFontScaling={false}
                                customButton={(onConfirm) => customButton(onConfirm)}
                                placeholder='Select Your Date'
                                onConfirm={(startDate, endDate) => setSelectedDate(startDate, endDate)}
                                mode={'range'}

                            />
                        </Pressable>
                        <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, borderColor: '#ffc72c', borderWidth: 2, paddingVertical: 15 }}>
                            <Ionicons name="ios-person-outline" size={24} color="black" />
                            <TextInput placeholderTextColor='red' placeholder={`${rooms} Rooms - ${adults} Adults - ${children} Children`} />

                        </Pressable>
                        <Pressable style={{ alignItems: 'center', gap: 10, paddingHorizontal: 10, borderColor: '#FFC72C', borderWidth: 2, paddingVertical: 15, backgroundColor: '#2a52be' }}>
                            <Text style={{ color: 'white', fontWeight: '500', fontSize: 17 }} onPress={()=>searchPlaces(route.params.input)}>Search</Text>
                        </Pressable>
                    </View>
                    <Text style={{marginHorizontal:20,fontSize:17,fontWeight:'500'}}>Travel More Spend Less</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Pressable style={{width:200,height:150,marginTop:10,backgroundColor:'#003580',padding:20,marginHorizontal:10,borderRadius:10}}>
                            <Text style={{color:'white',fontSize:15,fontWeight:'bold',marginVertical:7}}>Genius</Text>
                            <Text style={{color:'white',fontSize:15,fontWeight:'500'}}>You are ate genius level one in our loyalty program</Text>
                        </Pressable>
                        <Pressable style={{width:200,height:150,marginTop:10,backgroundColor:'#E0E0E0',borderWidth:2,padding:20,marginHorizontal:20,borderRadius:10}}>
                            <Text style={{fontSize:15,fontWeight:'bold',marginVertical:7}}>15% Discounts</Text>
                            <Text style={{fontSize:15,fontWeight:'500'}}>Complete 5 steps to unlock level 3</Text>
                        </Pressable> 
                        <Pressable style={{width:200,height:150,marginTop:10,backgroundColor:'#E0E0E0',borderWidth:2,padding:20,marginHorizontal:20,borderRadius:10}}>
                            <Text style={{fontSize:15,fontWeight:'bold',marginVertical:7}}>10% Discounts</Text>
                            <Text style={{fontSize:15,fontWeight:'500'}}>Enjoy Discounts at participating at properties worldwide</Text>
                        </Pressable> 
                    </ScrollView>
                    <Pressable style={{marginTop:40, justifyContent:'center',alignItems:'center'}}>
                        <Image style={{width:200,height:50,reszieMode:'cover'}} source={{ uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png"}}/>
                    </Pressable>
                </ScrollView>
            </View>
            <BottomModal swipeThreshold={200} onBackdropPress={() => setModalVisible(!modalVisible)} swipeDirection={['up', 'down']}
                footer={
                    <ModalFooter>
                        <ModalButton text='Apply' style={{ marginBottom: 20, color: 'white', backgroundColor: '#003580' }} onPress={() => setModalVisible(!modalVisible)} />
                    </ModalFooter>
                }
                modalTitle={<ModalTitle title='Select rooms and guests'>
                </ModalTitle>}
                modalAnimation={
                    new SlideAnimation({
                        slideFrom: 'bottom'
                    })
                }
                onHardwareBackPress={() => setModalVisible(!modalVisible)}
                visible={modalVisible}
                onTouchOutside={() => setModalVisible(!modalVisible)}
            >
                <ModalContent style={{ width: '100%', height: 310 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15 }}>
                        <Text style={{fontWeight:'500',fontSize:16}}>Rooms</Text>
                        <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                            <Pressable style={{ width: 26, height: 26, borderRadius: 13, alignItems: 'center', justifyContent: "center", borderColor: "#BEBEBE", backgroundColor: "#E0E0E0" }}>
                                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: '600', paddingHorizontal: 6 }} onPress={()=>setRooms(Math.max(1,rooms-1))}>-</Text>
                            </Pressable>

                            <Pressable>
                                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '500', paddingHorizontal: 6 }}>{rooms}</Text>
                            </Pressable>
                            <Pressable style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#BEBEBE", backgroundColor: "#E0E0E0" }}>
                                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600', paddingHorizontal: 6 }} onPress={()=>setRooms(rooms+1)}>+</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15 }}>
                        <Text style={{fontWeight:'500',fontSize:16}}>Adults</Text>
                        <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                            <Pressable style={{ width: 26, height: 26, borderRadius: 13, alignItems: 'center', justifyContent: "center", borderColor: "#BEBEBE", backgroundColor: "#E0E0E0" }}>
                                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: '600', paddingHorizontal: 6 }} onPress={()=>setAdults(Math.max(1,adults-1))}>-</Text>
                            </Pressable>

                            <Pressable>
                                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '500', paddingHorizontal: 6 }}>{adults}</Text>
                            </Pressable>
                            <Pressable style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#BEBEBE", backgroundColor: "#E0E0E0" }}>
                                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600', paddingHorizontal: 6 }} onPress={()=>setAdults(adults+1)}>+</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15 }}>
                        <Text style={{fontWeight:'500',fontSize:16}}>Children</Text>
                        <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                            <Pressable style={{ width: 26, height: 26, borderRadius: 13, alignItems: 'center', justifyContent: "center", borderColor: "#BEBEBE", backgroundColor: "#E0E0E0" }}>
                                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: '600', paddingHorizontal: 6 }} onPress={()=>setChildren(Math.max(0,children-1))}>-</Text>
                            </Pressable>

                            <Pressable>
                                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '500', paddingHorizontal: 6 }}>{children}</Text>
                            </Pressable>
                            <Pressable style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#BEBEBE", backgroundColor: "#E0E0E0" }}>
                                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600', paddingHorizontal: 6 }} onPress={()=>setChildren(children+1)}>+</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                </ModalContent>
            </BottomModal>
        </>
    )
}

export default HomeScreens

const styles = StyleSheet.create({})