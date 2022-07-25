import { Image, ScrollView,Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import React, { useState } from "react";
import { Divider } from 'react-native-paper';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Screen1 from './screen1';
import { useNavigation } from "@react-navigation/native";
const Screen2 = ({
    restaurantName,
    foods,
  }) => {
const navigation=useNavigation();
const [counter,setCounter]=useState();
useEffect(() => {
    setCounter(count);
  }, [count,counter]);


    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) =>
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...item,
          restaurantName: "Al-Khan",
          checkboxValue: checkboxValue,
        },
      });
     // const [count,setCount]=useState(0);
     const count = useSelector(
        (state) => state.cartReducer.selectedItems.count
      );
    
      
     const ADD_COUNT = () =>
     {
        
        dispatch({
       type: "ADD_COUNT",
     });
     setCounter(count);
     
   }
    
     const REMOVE_COUNT = () =>
     {dispatch({
       type: "REMOVE_COUNT",
     });
     setCounter(count);
   }
 
     
  
  
    // const isFoodInCart = (food, cartItems) =>
    //   Boolean(cartItems.find((item) => item.title === food.title));
   
  
  return (
    
    <ScrollView>
   <View style={{ backgroundColor:'white',}}>

    <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
      
      <TouchableOpacity style={{backgroundColor:'black',padding:10}} onPress={()=>REMOVE_COUNT(count)}>
       <Text  style={{color:'white'}}>Decrease </Text> 
      </TouchableOpacity>
      
      <Text style={{fontSize:20}}>    {counter}    </Text>
      
      <TouchableOpacity style={{backgroundColor:'black',padding:10}} onPress={()=>ADD_COUNT(count)}>
       <Text style={{color:'white'}}> Increase </Text> 
      </TouchableOpacity>
        
    </View>

   
    
   <TouchableOpacity style={{marginTop:20,alignItems:'center', backgroundColor:'yellow',padding:10}} onPress={()=>navigation.navigate("screen1")}>
    
    <Text>Screen1</Text></TouchableOpacity>
    
     
    </View>
    </ScrollView>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
