import { View, Text, StyleSheet } from 'react-native';
import { LogoHeader } from '@/components/LogoHeader';
import { ProfileHeader } from '@/components/ProfileHeader';
import { FontAwesome } from "@expo/vector-icons";


export default function ProfileScreen(){

    return(
        <View>
     <ProfileHeader/>

     <View style={styles.identification}>
         <FontAwesome name="user-circle" size={80} color="#0B45BC" />
        <Text style={styles.name}>Alex Sagredo Burgos</Text>
        <Text>Paciente activo desde 2024</Text>
    </View>

    <View>

    </View>


      </View>
    )
}

const styles = StyleSheet.create({

    identification: {
    padding: 24,
    margin: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 25
    },

    name: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22,
        paddingTop: 13
    }
})
