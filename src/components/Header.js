import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={{backgroundColor:'#003580',height:65,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
      <Pressable style={{flexDirection:'row',justifyContent:'center',borderWidth:1,borderColor:'white',padding:8,borderRadius:25}}>
      <Ionicons name="bed-outline" size={24} color="white" />
      <Text style={{color:'white',fontSize:15,fontWeight:'bold',marginLeft:8}}>Stays</Text>
      </Pressable>
      <Pressable style={{flexDirection:'row',justifyContent:'center'}}>
      <Ionicons name="airplane-outline" size={24} color="white" />
      <Text style={{color:'white',fontSize:15,fontWeight:'bold',marginLeft:8}}>Flights</Text>
      </Pressable>
      
      <Pressable style={{flexDirection:'row',justifyContent:'center'}}>
      <AntDesign name="car" size={24} color="white" />
      <Text style={{color:'white',fontSize:15,fontWeight:'bold',marginLeft:8}}>Car Rentel</Text>
      </Pressable>
      <Pressable style={{flexDirection:'row',justifyContent:'center'}}>
      <FontAwesome5 name="taxi" size={24} color="white" />
      <Text style={{color:'white',fontSize:15,fontWeight:'bold',marginLeft:8}}>Taxi</Text>
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})