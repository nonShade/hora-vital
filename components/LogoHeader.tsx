import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeartIcon } from "./HeartIcon";

export const LogoHeader = () => (
    <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <HeartIcon size={32} />
            <Text style={styles.logo}>Hora Vital</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2563eb",
        paddingTop: 60,
        paddingBottom: 30,
        alignItems: "flex-start",
        paddingLeft: 20,
    },
    logo: {
        color: "white",
        fontWeight: "bold",
        fontSize: 32,
    },
});
