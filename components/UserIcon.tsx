import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ViewStyle } from "react-native";

type UserIconProps = {
    size?: number;
    style?: ViewStyle | ViewStyle[];
    color?: string;
};

export const UserIcon: React.FC<UserIconProps> = ({size = 24, style, color = '#FFF'}) => (

    <View
     style={[
            {
                width: size + 24,
                height: size + 3
                
            },
            style,
        ]}
    >
        <FontAwesome name="user-circle" size={size} color={color}/>
    </View>


);

