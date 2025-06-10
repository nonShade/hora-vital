import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { ViewStyle } from "react-native";

type HeartIconProps = {
    size?: number;
    style?: ViewStyle | ViewStyle[];
    color?: string;
};

export const HeartIcon: React.FC<HeartIconProps> = ({ size = 24, style, color = "#FFF" }) => (
    <View
        style={[
            styles.iconCircle,
            {
                width: size + 24,
                height: size + 24,
                borderRadius: (size + 24) / 2,
            },
            style,
        ]}
    >
        <FontAwesome name="heart" size={size} color={color} />
    </View>
);

const styles = StyleSheet.create({
    iconCircle: {
        backgroundColor: "#507FEC",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
});
