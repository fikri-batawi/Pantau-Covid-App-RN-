import React from 'react'
import {View, Text ,ScrollView, Image, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export default BeritaDaftarRs = () => {
    return(
        <View
            style={{
                flex:1,
                backgroundColor:'#f3f2f2',
                paddingHorizontal:(windowWidth/10-16)
            }}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                    
            <View 
                style={{
                    marginVertical:(windowWidth/10-26)
                }}>
                <Text 
                    style={{
                        fontSize:(windowWidth/10-16),
                        textAlign:'center',
                        fontWeight:'bold',
                        
                    }}>Daftar 100 Rumah Sakit Rujukan Penanganan Virus Corona</Text>
            </View>
            <View>
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Pemerintah Indonesia mengumumkan adanya dua orang warganya yang positif terjangkit virus corona atau penyakit Covid-19.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Pengumuman itu disampaikan oleh Presiden RI Joko Widodo, Senin (2/3/2020) di Istana Kepresidenan, Jakarta.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Menurut Jokowi, dua warga negara Indonesia (WNI) itu sempat menjalin kontak dengan warga negara Jepang yang belakangan diketahui juga positif virus corona.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Terkait pencegahan virus corona, Kementerian Kesehatan menyatakan telah menyiapkan 100 rumah sakit rujukan di 32 provinsi.  
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Sebanyak 100 rumah sakit itu dinilai telah mampu menangani pasien jika ada yang terkonfirmasi virus corona.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Berikut daftar 100 rumah sakit yang bisa menjadi rujukan penanganan virus corona:
            </Text>
            
            </View>
            <View 
                style={{
                    width:"100%",
                    height:(windowWidth+140),
                    marginBottom:(windowWidth/10-26)
                }}>
                <Image
                    style={{
                        width:'100%',
                        height:'100%'
                    }} 
                    source={require('../../../img/daftar-rs.jpg')}/>
            </View>
            <View>
            <Text style={{
                marginVertical:(windowWidth/10-26),
                textAlign:'justify'
            }}>Sumber : www.kompas.com
            </Text>
            </View>
            </ScrollView>
        </View>
    )
}