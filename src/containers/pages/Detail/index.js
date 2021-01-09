import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Banner_detail from '../../../components/molecules/Banner_detail'
import Header_home from '../../../components/molecules/Header_home'

let  d = new Date()
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let tanggal ="2 "+ months[2] +" - "+ d.getDate() +" " + months[d.getMonth()]


export default class Detail extends Component
{
    constructor(){
        super()
        this.state = {
            dataIndonesia : []
        }
    }
    
    componentDidMount(){
        this.loadData()
        
    }
    
    loadData = () => {
        fetch('https://api.kawalcorona.com/indonesia/')
        .then(res => res.json())
        .then((data) => {
            if(data){
                this.setState({
                    dataIndonesia :data[0]
                })
            }
        })
    }
    
    render(){
        return(
           
            <View
                style={{
                    flex:1,
                    backgroundColor:'#f3f2f2',
                    padding:20,
                }}>
                <Header_home 
                    title={this.state.dataIndonesia.name} 
                    sub_title={tanggal}/>
                <Banner_detail 
                    title="Positif" 
                    value={this.state.dataIndonesia.positif}/>
                <Banner_detail 
                    title="Sembuh" 
                    value={this.state.dataIndonesia.sembuh}/>
                <Banner_detail 
                    title="Meninggal" 
                    value={this.state.dataIndonesia.meninggal}/>

                <TouchableOpacity
                    onPress={()=>Actions.pop()}
                    style={{
                        backgroundColor:'#F0A046',
                        padding:10,
                        marginTop:20,
                        alignItems:'center',
                        borderRadius:8,
                    }}>
                    <Text 
                        style={{
                            fontSize:18,
                            fontWeight:'bold'
                        }}>Kembali</Text>
                </TouchableOpacity>
            </View>
        )
    }
}