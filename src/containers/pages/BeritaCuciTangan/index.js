import React from 'react'
import {View, Text ,ScrollView, Image, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export default BeritaCuciTangan = () => {
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
                        
                    }}>Cuci tangan pakai sabun untuk melindungi dari coronavirus (COVID-19)</Text>
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
                    source={require('../../../img/cuci-tangan.jpeg')}/>
            </View>
            <View>
            <Text style={{
                textAlign:'justify'
            }}>Penyakit saluran pernapasan seperti COVID-19 yang disebabkan coronavirus menyebar ketika percikan dahak yang mengandung virus masuk ke dalam tubuh melalui mata, hidung, atau tenggorokan. Akan tetapi, yang paling sering terjadi adalah melalui tangan. Penyebaran virus dari satu orang ke orang lain paling sering terjadi melalui tangan.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Selama pandemi global terjadi, salah satu cara paling mudah, penting, dan tanpa biaya untuk mencegah penyebaran virus adalah dengan rutin cuci tangan pakai sabun dan air.  
            </Text>
            <Text style={{
                textAlign:'justify',
                marginBottom:(windowWidth/10-16)
            }}>Berikut adalah fakta-fakta penting tentang cuci tangan yang perlu Anda ketahui:
            </Text>

            {/* No 1 */}
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>1. Bagaimana cara cuci tangan yang tepat?
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Untuk menghilangkan semua jejak virus di tangan Anda, gosokan dan bilasan singkat saja tidak cukup. Ikuti langkah-langkah di bawah ini untuk cuci tangan yang efektif,
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>Langkah 1: Basahi tangan seluruhnya dengan air bersih mengalir
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>Langkah 2: Tuangkan sabun ke seluruh bagian tangan
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>Langkah 3: Gosok sabun ke telapak tangan, punggung tangan, dan sela-sela jari – setidaknya selama 20 detik
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>Langkah 4: Bilas tangan dengan air bersih mengalir
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>Langkah 5: Keringkan tangan dengan handuk bersih atau tisu
            </Text>
            
            {/* No 2 */}
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>2. Berapa lama saya harus mencuci tangan?
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Anda harus mencuci tangan setidaknya selama 20-30 detik. Cara mudah memperhitungkan durasinya, nyanyikan lagu 'Selamat Ulang Tahun' sebanyak dua kali. 
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Begitu juga ketika menggunakan cairan pembersih tangan: gunakan cairan pembersih tangan yang berbasis alkohol minimal 60% dan gosokkan ke tangan setidaknya selama 20 detik untuk memastikan seluruh tangan bersih.
            </Text>
            
            {/* No 3 */}
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>3. Kapankah saya harus cuci tangan?
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Dalam upaya pencegahan COVID-19, pastikan Anda cuci tangan di waktu-waktu berikut:
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Setelah membuang ingus, setelah batuk, atau setelah bersin
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Setelah berkunjung dari tempat umum, seperti kendaraan umum, pasar, atau tempat ibadah
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Setelah menyentuh barang di luar rumah, termasuk uang
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Sebelum, saat, dan sesudah merawat orang sakit
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Sebelum dan sesudah makan
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Secara umum, Anda harus cuci tangan di waktu-waktu berikut:
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Setelah menggunakan toilet
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Sebelum dan sesudah makan
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Setelah membuang sampah
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Setelah menyentuh hewan
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Setelah mengganti popok bayi atau membantu anak menggunakan toilet
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Ketika tangan terlihat kotor
            </Text>
            
            {/* No 4 */}
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>4.Cara membantu anak mencuci tangannya?
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Anda bisa membantu anak Anda cuci tangan dengan membuatnya mudah bagi mereka, misalnya, meletakkan bangku pendek agar mereka bisa mencapai air dan sabun sendiri. Anda juga bisa membuat cuci tangan jadi menyenangkan bagi mereka dengan menyanyikan lagu favorit mereka sembari membantu mereka menggosok tangan mereka.
            </Text>
            
            {/* No 5 */}
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>5. Apakah saya perlu air hangat untuk cuci tangan?
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Tidak, Anda bisa menggunakan air dengan temperatur apapun untuk cuci tangan. Air dingin atau air hangat sama-sama efektif dalam membunuh kuman atau virus  – asalkan Anda menggunakan sabun!
            </Text>
            
            {/* No 6 */}
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>6. Apakah saya perlu mengeringkan tangan saya dengan handuk?
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Kuman menyebar lebih mudah dari kulit yang basah dibandingkan kulit yang kering, untuk itulah mengeringkan tangan Anda sangat penting. Kertas tisu atau kain bersih adalah cara paling efektif untuk menghilangkan kuman tanpa menyebarkannya ke permukaan lain.
            </Text>

            {/* No 7 */}
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>7. Mana yang lebih baik: cuci tangan pakai sabun atau dengan cairan pembersih tangan?
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Secara umum, cuci tangan, baik itu dengan air dan sabun, maupun dengan cairan pembersih tangan, ketika dilakukan dengan benar, keduanya sama efektifnya dalam membunuh kuman dan patogen. Cairan pembersih tangan lebih praktis digunakan ketika berada di luar ruangan, tapi bisa jadi harganya mahal dan sulit ditemukan dalam situasi darurat. Selain itu, cairan pembersih tangan berbasis alkohol dapat membunuh coronavirus, tapi tidak dapat membunuh semua jenis bakteri dan virus. Misalnya saja, ia tidak dapat digunakan untuk menghilangkan norovirus dan rotavirus.
            </Text>

            {/* No 8 */}
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>8. Bagaimana jika saya tidak punya sabun?
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Gunakan air yang telah diberi klorin atau cairan pembersih tangan yang mengandung alkohol setidaknya 60% adalah pilihan kedua terbaik jika Anda tidak punya akses ke air mengalir dan sabun. Jika dua hal ini tidak tersedia, gunakan air sabun atau abu untuk menghilangkan bakteri, meskipun cara ini kurang efektif dibandingkan air dan sabun. Jika Anda menggunakan cara ini, pastikan Anda segera cuci tangan begitu Anda mendapatkan akses ke fasilitas cuci tangan, dan hindari kontak dengan orang lain atau menyentuh permukaan benda-benda lainnya.  
            </Text>

            {/* No 9 */}
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>9. Apa lagi yang bisa saya lakukan untuk membantu menghentikan penyebaran coornavirus?
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Batuk dan bersin dengan etika yang benar: Tutupi mulut dan hidung dengan siku bagian dalam atau dengan tisu ketika batuk atau bersin, lalu segera buang tisu, dan cuci tangan Anda
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Hindari menyentuh muka Anda (mulut, hidung, mata)
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Terapkan social distancing: Hindari bersalaman, memeluk atau mencium orang, berbagi makanan, peralatan makan, cangkir, dan handuk
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Hindari kontak dekat dengan orang yang memiliki gejala demam atau flu
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Segera cari bantuan medis jika Anda atau anak Anda demam, batuk, atau kesulitan bernapas
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Bersihkan permukaan benda yang punya kemungkinan bersentuhan dengan virus, dan rutin membersihkan permukaan benda-benda (terutama di tempat umum)
            </Text>
            

            </View>
            </ScrollView>
        </View>
    )
}