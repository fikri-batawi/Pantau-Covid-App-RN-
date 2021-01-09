import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
export default Banner_home = () => {
    return (
        <View
            style={{
                marginTop:20,
                width: '100%',
                borderRadius: 10,
                backgroundColor: "white",
                shadowColor:'black',
            }}>
            <View
                style={{
                    padding: 20,
                    
                }}>
                <Image
                    style={{
                        width: '100%',
                        height: 300,
                        resizeMode: 'cover',
                    }}
                    source={require('../../../img/virus.png')}
                />
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 18,
                        marginTop: 5,
                    }}>Waspada Corona</Text>

            </View>
            <TouchableOpacity
                onPress={()=>Actions.detail()}
                style={{
                    backgroundColor: '#F0A046',
                    borderBottomRightRadius:10,
                    borderBottomLeftRadius:10,
                    padding:10
                }}>
                <Text
                    style={{
                        textAlign:'center',
                        fontSize:18,
                        fontWeight:'bold'
                    }}>Data corona Indonesia</Text>
            </TouchableOpacity>
        </View>
    )
}