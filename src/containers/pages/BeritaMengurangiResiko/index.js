import React from 'react'
import {View, Text ,ScrollView, Image, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export default BeritaMengurangiResiko = () => {
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
                        fontSize:(windowWidth/10-6),
                        textAlign:'center',
                        fontWeight:'bold',
                        
                    }}>Ketahui Cara Mengurangi Risiko</Text>
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
                    source={require('../../../img/melawan-virus.jpg')}/>
            </View>
            <View>
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Cara terbaik mencegah adalah tidak terpapar virus corona. Kebanyakan orang tertular langsung akibat menghirup percikan batuk atau napas orang sakit. Orang juga bisa tertular virus karena menyentuh permukaan benda yang tercemar percikan batuk atau napas orang sakit. Para ahli mengatakan virus corona dapat hidup di permukaan benda selama beberapa jam sampai beberapa hari dan karena itu, cuci tangan pakai sabun dan air mengalir menjadi sangat penting.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify',
                fontWeight:'bold'
            }}>Tips Kebersihan
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                textAlign:'justify',
                marginBottom:(windowWidth/10-16)
            }}>1. Sering cuci tangan pakai sabun dan air mengalir minimal 20 detik dan ingatkan anak untuk mencuci tangan pakai sabun secara benar. (Gunakan cara mudah mengukur durasi 20 detik, semisal menyanyi lagu Selamat Ulang Tahun 2x)
            </Text>

            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>2. Cuci tangan pakai sabun saat tiba di rumah, tempat kerja atau sekolah, sebelum makan, sebelum menyiapkan makanan, dan setelah menggunakan toilet.
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>3. Gunakan cairan pembersih tangan (minimal 60% alkohol) bila sabun dan air mengalir tidak tersedia
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>4. Tutup mulut dan hidung dengan siku terlipat saat batuk atau bersin atau gunakan tisu, yang langsung dibuang ke tempat sampah tertutup setelah digunakan. Cuci tangan dengan sabun dan air mengalir atau cairan pembersih tangan.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>5. Jaga jarak paling sedikit 1 meter dengan orang. Jangan berada dekat orang yang tidak sehat
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>6. Hindari menyentuh wajah karena mulut, hidung mata dapat menjadi pintu masuk virus.
            </Text>
            
            {/* No 2 */}
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify',
                fontWeight:'bold'
            }}>Kurangi Kontak Langsung (Social Distancing)
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Ketika orang-orang yang sakit COVID-19 tengah diisolasi tapi menyebarkan virus corona secara cepat ke wilayahnya melalui kontak jarak dekat, maka pola itu disebut sebagai penularan komunitas (community transmission). Semakin meluas penularan komunitas yang terjadi, maka tindakan tambahan perlu dilakukan, yaitu mengurangi kontak antara satu warga dengan warga lain di wilayah itu (social distancing atau di sini akan disebut sebagai mengurangi kontak antarwarga).
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Ajang yang mendatangkan keramaian seperti pertandingan bola, konser musik, acara keagamaan dan pertemuan besar sudah ditunda di mana-mana, di Indonesia maupun di berbagai belahan dunia lain.
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Termasuk tindakan mengurangi kontak antarwarga adalah mengurangi kegiatan penyuluhan di tempat umum, menutup sekolah dan mengurangi penggunaan transportasi umum yang tidak penting.
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Tindakan mengurangi kontak antarwarga dapat ditingkatkan ke tahap yang lebih tinggi dengan pertimbangan penyebaran yang semakin meluas dan dengan mempertimbangkan antara efektivitas dan dampaknya pada masyarakat. Bila penyebaran virus terjadi di lokasi tertentu, tindakan mengurangi kontak antarwarga pertama-tama dilakukan di lokasi-lokasi tersebut dan tidak langsung di tingkat nasional.
            </Text>
            
            {/* No 3 */}
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify',
                fontWeight:'bold'
            }}>Berikut panduan para ahli:
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Hindari pertemuan besar (lebih dari 10 orang)
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Jangan pergi ke sarana kesehatan kecuali diperlukan. Bila Anda memiliki anggota keluarga atau kawan dirawat di rumah sakit, batasi pengunjung – terutama bila mereka anak-anak atau kelompok risiko tinggi (lanjut usia dan orang dengan penyakit yang dapat memperberat, misalnya gangguan jantung, diabetes dan penyakit kronis lainnya)
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Orang berisiko tinggi sebaiknya tetap di rumah dan menghindari pertemuan atau kegiatan lain yang dapat membuatnya terpapar virus, termasuk melakukan perjalanan
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Beri dukungan pada anggota keluarga (yang tidak tinggal di rumah Anda) ataupun tetangga yang terinfeksi tanpa harus bertemu langsung, misalnya melalui telepon ataupun WA.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Ikuti panduan resmi di wilayah Anda yang bisa saja merubah rutinitas termasuk kegiatan sekolah atau pekerjaan
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Ikuti perkembangan informasi karena situasi dapat berubah dengan cepat sesuai perkembangan penyakit dan penyebarannya.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Ingat bahwa bila setiap orang melakukan apa yang harus dilakukan, kita semua dapat melalui ini semua dan kembali ke kehidupan normal.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Jika Anda mengalami gejala-gejala infeksi virus corona (COVID-19) buka tautan ini ke Sakit? Ambil tindakan
            </Text>
            </View>
            <Text style={{
                marginVertical:(windowWidth/10-26),
                textAlign:'justify'
            }}>Sumber : www.covid19.go.id
            </Text>
            </ScrollView>
        </View>
    )
}