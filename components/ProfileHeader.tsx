import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserIcon } from '@/components/UserIcon';

export const ProfileHeader = () => (

   <View style={styles.container}>
           <View style={{ flexDirection: "row", alignItems: "center" }}>
               <UserIcon size={45} />
               <Text style={{ color: "white", fontWeight: "bold", fontSize: 32}}>Mi Cuenta</Text>
           </View>
      </View>

);


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2563eb",
        alignItems: "flex-start",
        paddingLeft: 25,
        paddingBottom: 30,
        paddingTop: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
})  