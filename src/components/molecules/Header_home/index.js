import React from 'react'
import {View, Text, Dimensions} from 'react-native'

const widthWindow = Dimensions.get('window').width
const heightWindow = Dimensions.get('window').height


export default Header_home = (props) => {
    return(
        <View 
            style={{
                
            }}>
            <Text
                style={{
                    fontSize:(widthWindow / 10 - 4),
                    fontWeight:'bold',
                }}>
                    {props.title}
                    <Text style={{
                        fontSize:(widthWindow/10),
                        color:'#ff6600'
                    }}>.</Text>
            </Text>
            <Text   
                style={{
                    fontSize:(widthWindow/10-22),
                    fontWeight:'bold'
                }}>{props.sub_title}</Text>
        </View>
    )
}
