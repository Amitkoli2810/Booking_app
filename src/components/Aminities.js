import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Aminities = () => {
    const services = [
        {
          id: "0",
          name: "room service",
        },
        {
          id: "2",
          name: "free wifi",
        },
        {
          id: "3",
          name: "Family rooms",
        },
        {
          id: "4",
          name: "Free Parking",
        },
        {
          id: "5",
          name: "swimming pool",
        },
        {
          id: "6",
          name: "Restaurant",
        },
        {
          id: "7",
          name: "Fitness center",
        },
      ];
  return (
    <View style={{padding:10}}>
      <Text style={{fontSize:16,fontWeight:'500'}}>Most Popular Facilities</Text>
      <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
        {
            services.map((item,index)=>(
                <View style={{backgroundColor:'#007FFF',margin:6,paddingHorizontal:5,paddingVertical:3,borderRadius:10,alignItems:'center'}} key={index}>
                    <Text style={{color:'white'}}>{item.name}</Text>
                </View>
            ))
        }
      </View>
    </View>
  )
}

export default Aminities

const styles = StyleSheet.create({})