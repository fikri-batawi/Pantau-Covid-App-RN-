import React, {useState} from 'react'
import {View, Picker, StyleSheet} from 'react-native'

export default picker = () => {
    const {selectedValue, setSelectedValue} = useState('Java')
    return(
        <View style={StyleSheet.container}>
            <picker
                selectedValue={selectedValue}
                style={{
                    height:50,
                    width:150
                }}
                onChangeValue={(itemVal) => setSelectedValue(itemVal)}
                >
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="js" />
            </picker>
        </View>

    )

}

const styles = StyleSheet.create({
    container : {
        flex:1,
        paddingTop : 40,
        alignItems:'center'
    }
})