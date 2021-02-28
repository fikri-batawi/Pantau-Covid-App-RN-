import React, { Component, useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { date, _back, tanggal, day } from './src/utils'
import { ScrollView } from 'react-native-gesture-handler'
import BeritaCuciTangan from './src/containers/pages/BeritaCuciTangan'
import BeritaDaftarRs from './src/containers/pages/BeritaDaftarRs'
import BeritaMengurangiResiko from './src/containers/pages/BeritaMengurangiResiko'
import BeritaKetikaSakit from './src/containers/pages/BeritaKetikaSakit'

const stack = createStackNavigator()
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

Home = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'space-between',
                backgroundColor: '#f3f2f2',
                paddingHorizontal: (windowWidth / 10 - 16),
                paddingTop: (windowWidth / 10 - 16),
            }}>
            <Header_home title="Pantau covid-19" sub_title={date} />

            <ScrollView
                showsVerticalScrollIndicator={false}>

                {/* Data Seluruh indonesia */}
                <View
                    style={{
                        marginVertical: (windowWidth / 10 - 16),
                        width: '100%',
                        borderRadius: (windowWidth / 10 - 26),
                        backgroundColor: "white",
                        shadowColor: 'black',
                    }}>
                    <View
                        style={{
                            padding: (windowWidth / 10 - 16),

                        }}>
                        <Image
                            style={{
                                width: '100%',
                                height: (windowWidth - 60),
                                resizeMode: 'cover',
                            }}
                            source={require('./src/img/virus.png')}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: (windowWidth / 10 - 18),
                                marginTop: (windowWidth / 10 - 31),
                            }}>Waspada Corona</Text>

                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('detail', { nama: "Indonesia" })}
                        style={{
                            backgroundColor: '#F0A046',
                            borderBottomRightRadius: (windowWidth / 10 - 26),
                            borderBottomLeftRadius: (windowWidth / 10 - 26),
                            padding: (windowWidth / 10 - 26)
                        }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: (windowWidth / 10 - 18),
                                fontWeight: 'bold'
                            }}>Data corona Indonesia</Text>
                    </TouchableOpacity>
                </View>

                {/* Data wilayah provinsi */}
                <View
                    style={{
                        marginVertical: (windowWidth / 10 - 16),
                        width: '100%',
                        borderRadius: (windowWidth / 10 - 26),
                        backgroundColor: "white",
                        shadowColor: 'black',
                    }}>
                    <View
                        style={{
                            padding: (windowWidth / 10 - 16),

                        }}>
                        <Image
                            style={{
                                width: '100%',
                                height: (windowWidth - 60),
                                resizeMode: 'cover',
                            }}
                            source={require('./src/img/more-virus.png')}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: (windowWidth / 10 - 18),
                                marginTop: (windowWidth / 10 - 31),
                            }}>Pantau wilayah anda</Text>

                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('detail-wilayah')}
                        style={{
                            backgroundColor: '#F0A046',
                            borderBottomRightRadius: (windowWidth / 10 - 26),
                            borderBottomLeftRadius: (windowWidth / 10 - 26),
                            padding: (windowWidth / 10 - 26)
                        }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: (windowWidth / 10 - 18),
                                fontWeight: 'bold'
                            }}>Data corona wilayah</Text>
                    </TouchableOpacity>
                </View>

                {/* Informasi Covid */}
                <View
                    style={{
                        marginVertical: (windowWidth / 10 - 16),
                        width: '100%',
                        borderRadius: (windowWidth / 10 - 26),
                        backgroundColor: "white",
                        shadowColor: 'black',
                    }}>
                    <View
                        style={{
                            padding: (windowWidth / 10 - 16),

                        }}>
                        <Image
                            style={{
                                width: '100%',
                                height: (windowWidth - 60),
                                resizeMode: 'cover',
                            }}
                            source={require('./src/img/info.png')}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: (windowWidth / 10 - 18),
                                marginTop: (windowWidth / 10 - 31),
                            }}>Informasi Covid-19</Text>

                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('info-covid')}
                        style={{
                            backgroundColor: '#F0A046',
                            borderBottomRightRadius: (windowWidth / 10 - 26),
                            borderBottomLeftRadius: (windowWidth / 10 - 26),
                            padding: (windowWidth / 10 - 26)
                        }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: (windowWidth / 10 - 18),
                                fontWeight: 'bold'
                            }}>Hal yang perlu anda ketahui</Text>
                    </TouchableOpacity>
                </View>


                {/* <Footer_version/> */}
                <View style={{ marginBottom: (windowWidth / 10 - 16) }}>
                    <Text
                        style={{
                            fontSize: (windowWidth / 10 - 24),
                            textAlign: 'center'
                        }}>V.0.0.2</Text>
                </View>
            </ScrollView>


        </View>
    )
}
Detail = ({ navigation, route }) => {
    const [dataSekarang, setdataSekarang] = useState({})
    const [dataUpdate, setdataUpdate] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    if (route.params.nama == "Indonesia") {
        useEffect(() => {
            const startTime = 1583107200000 // Timestamp 2 Maret
            const day       = 86400000 // Penambahan per hari
            var today       = new Date().getTime();
            var selisih     = Math.round((today - startTime) / day);

            fetch('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/Statistik_Perkembangan_Kasus_COVID19_Indonesia_Februari_2021/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
                .then((response) => response.json())
                .then((json) => {
                    json.features.forEach(data => {
                        if(data.attributes.Hari_ke == selisih){
                            setdataSekarang({
                                positif: data.attributes.Jumlah_Kasus_Kumulatif,
                                sembuh: data.attributes.Jumlah_Pasien_Sembuh,
                                meninggal: data.attributes.Jumlah_Pasien_Meninggal
                            })
                            setdataUpdate({
                                positif: data.attributes.Jumlah_Kasus_Baru_per_Hari,
                                sembuh: data.attributes.Jumlah_Kasus_Sembuh_per_Hari,
                                meninggal: data.attributes.Jumlah_Kasus_Meninggal_per_Hari
                            })
                        }
                        setIsLoading(false)
                    });
                })
        },[]);
    } else {
        useEffect(() => {
            fetch('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
                .then((response) => response.json())
                .then((json) => {
                    json.features.map(data => {
                        if (data.attributes.Provinsi == route.params.data) {
                            setdataSekarang({
                                name: data.attributes.Provinsi,
                                positif: data.attributes.Kasus_Posi,
                                sembuh: data.attributes.Kasus_Semb,
                                meninggal: data.attributes.Kasus_Meni
                            });
                        }
                    })
                    setIsLoading(false)
                })
        });
    }

   
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#f3f2f2',
                padding: (windowWidth / 10 - 16),
            }}>
            <Header_home
                title="Indonesia"
                sub_title={day} />

            <Banner_detail
                title="Positif"
                value={dataSekarang.positif} />


            <Banner_detail
                title="Sembuh"
                value={dataSekarang.sembuh} />

            <Banner_detail
                title="Meninggal"
                value={dataSekarang.meninggal} />

            {
                route.params.nama == "Indonesia" &&
                <View>
                    <Header_home
                        title="Kasus baru"
                        sub_title={tanggal} />

                    <Banner_detail
                        title="Positif"
                        value={dataUpdate.positif} />


                    <Banner_detail
                        title="Sembuh"
                        value={dataUpdate.sembuh} />


                    <Banner_detail
                        title="Meninggal"
                        value={dataUpdate.meninggal} />
                </View>
            }


            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    backgroundColor: '#F0A046',
                    padding: (windowWidth / 10 - 26),
                    marginTop: (windowWidth / 10 - 16),
                    alignItems: 'center',
                    borderRadius: (windowWidth / 10 - 28),
                }}>
                <Text
                    style={{
                        fontSize: (windowWidth / 10 - 18),
                        fontWeight: 'bold'
                    }}>Kembali</Text>
            </TouchableOpacity>

            {isLoading && <Loader />}
        </View>
    )

}
Detail_wilayah = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
            .then((response) => response.json())
            .then((json) => {
                setData(json.features)
                setIsLoading(false)
            })
    }, []);

    let buttonWilayah = <View></View>
    if (data) {
        buttonWilayah = data.map(wilayah => {
            if (wilayah.attributes.Provinsi != "Indonesia") {
                return (
                    <View
                        key={wilayah.attributes.FID}
                        style={{
                            backgroundColor: 'white',
                            marginVertical: (windowWidth / 10 - 31),
                            padding: (windowWidth / 10 - 26),
                            borderRadius: (windowWidth / 10 - 26),
                        }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('detail', { data: wilayah.attributes.Provinsi })}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: (windowWidth / 10 - 18),
                                }}>{wilayah.attributes.Provinsi}</Text>

                            <Image style={{ height: (windowWidth / 10 - 4), width: (windowWidth / 10 - 4) }} source={require('./src/img/next.png')}></Image>

                        </TouchableOpacity>
                    </View>
                )
            }
        },()=>setIsLoading(false))
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#f3f2f2',
                padding: (windowWidth / 10 - 16),
            }}>
            <View style={{
                marginBottom: (windowWidth / 10 - 16)
            }}>
                <Header_home
                    title="Data wilayah"
                    sub_title={day} />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {buttonWilayah}

            </ScrollView>
            {isLoading && <Loader />}

        </View>
    )
}
Info_covid = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#f3f2f2',
                paddingHorizontal: (windowWidth / 10 - 16),
            }}>
            <View style={{
                marginVertical: (windowWidth / 10 - 16)
            }}>
                <Header_home
                    title="Informasi tentang covid  " />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        backgroundColor: '#FC7303',
                        marginVertical: 5,
                        padding: 10,
                        borderRadius: 10,
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('berita-cuci-tangan')}
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            // alignItems: "center",
                            padding: 5,
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'white'
                            }}>Cuci tangan pakai sabun untuk melindungi dari coronavirus (COVID-19)</Text>

                        <Text
                            style={{
                                color: 'white',
                                marginTop: 20
                            }}>Unicef</Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: '#09AD95',
                        marginVertical: 5,
                        padding: 10,
                        borderRadius: 10,
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('berita-daftar-rs')}
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            // alignItems: "center",
                            padding: 5,
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'white'
                            }}>Daftar 100 Rumah Sakit Rujukan Penanganan Virus Corona</Text>

                        <Text
                            style={{
                                color: 'white',
                                marginTop: 20
                            }}>Kompas</Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: '#D43F8D',
                        marginVertical: (windowWidth / 10 - 31),
                        padding: (windowWidth / 10 - 26),
                        borderRadius: (windowWidth / 10 - 26),
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('berita-mengurangi-resiko')}
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            // alignItems: "center",
                            padding: (windowWidth / 10 - 31),
                        }}>
                        <Text
                            style={{
                                fontSize: (windowWidth / 10 - 18),
                                color: 'white'
                            }}>Ketahui Cara Mengurangi Risiko</Text>

                        <Text
                            style={{
                                color: 'white',
                                marginTop: (windowWidth / 10 - 16)
                            }}>covid19.go.id</Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: '#F82649',
                        marginVertical: (windowWidth / 10 - 31),
                        padding: (windowWidth / 10 - 26),
                        borderRadius: (windowWidth / 10 - 26),
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('berita-ketika-sakit')}
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            // alignItems: "center",
                            padding: (windowWidth / 10 - 31),
                        }}>
                        <Text
                            style={{
                                fontSize: (windowWidth / 10 - 18),
                                color: 'white'
                            }}>Ketahui Apa yang Perlu Dilakukan Bila Sakit</Text>

                        <Text
                            style={{
                                color: 'white',
                                marginTop: (windowWidth / 10 - 16)
                            }}>covid19.go.id</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

Loader = () => {
    return(
        <View style={{
            flex:1,
            position:'absolute',
            top:0,
            left:0,
            bottom:0,
            right:0,
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center',
        }}>
            <ActivityIndicator color="#000" size="large" />
            <Text style={{marginTop:32}}>Please Wait</Text>
            <Text>Loading Data ...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: (windowWidth / 10 - 18),
        color: '#7D7D7D',
    }
})


export default class App_release extends Component {
    render() {
        return (
            <NavigationContainer>
                <stack.Navigator headerMode={false} initialRouteName='home'>
                    <stack.Screen name="home" component={Home} />
                    <stack.Screen name="detail" component={Detail} />
                    <stack.Screen
                        name="detail-wilayah"
                        component={Detail_wilayah} />
                    <stack.Screen name="info-covid" component={Info_covid} />

                    {/* Berita */}
                    <stack.Screen name="berita-cuci-tangan" component={BeritaCuciTangan} />
                    <stack.Screen name="berita-daftar-rs" component={BeritaDaftarRs} />
                    <stack.Screen name="berita-mengurangi-resiko" component={BeritaMengurangiResiko} />
                    <stack.Screen name="berita-ketika-sakit" component={BeritaKetikaSakit} />
                </stack.Navigator>
            </NavigationContainer>
        )
    }
}