import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default Banner_detail = (props) => {
    return(
        <View 
            style={{
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop:20,
                backgroundColor:'white',
                borderRadius:10,
                padding:10,
            }}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.text}>{props.value} orang</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text : {
        fontSize:18,
        color:'#7D7D7D',
    }
})