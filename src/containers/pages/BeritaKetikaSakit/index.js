import React from 'react'
import {View, Text ,ScrollView, Image, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export default BeritaKetikaSakit = () => {
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
                        fontSize:(windowWidth/10-12),
                        textAlign:'center',
                        fontWeight:'bold',
                        
                    }}>Ketahui Apa yang Perlu Dilakukan Bila Sakit</Text>
            </View>
            <View 
                style={{
                    width:"100%",
                    height:(windowWidth-10),
                    marginBottom:(windowWidth/10-26)
                }}>
                <Image
                    style={{
                        width:'100%',
                        height:'100%',
                        resizeMode:'contain'
                    }} 
                    source={require('../../../img/info-corona.png')}/>
            </View>
            <View>
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Ada banyak tipe virus corona yang dapat menginfeksi manusia, termasuk yang menyebabkan sakit pada saluran pernapasan. Virus corona (COVID-19) adalah penyakit baru, yang disebabkan virus corona yang baru yang sebelumnya tidak pernah ditemukan pada manusia.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Gejala utama adalah demam, rasa lelah dan batuk kering. Beberapa pasien mungkin mengalami rasa nyeri dan sakit, hidung tersumbat, pilek, sakit tenggorokan atau diare, Gejala-gejala yang dialami biasanya bersifat ringan dan muncul secara bertahap.
            </Text>
            <Text style={{
                textAlign:'justify',
                marginBottom:(windowWidth/10-16)
            }}>Namun bila mengalaminya, tidak berarti Anda terkena virus corona karena gejala-gejala itu mirip dengan flu biasa. Sebagian besar orang yang terinfeksi virus corona akhirnya sembuh. Kelompok lansia (lanjut usia) dan mereka yang memiliki masalah kesehatan memiliki risiko yang lebih besar. Segera kontak sarana kesehatan untuk konsultasikan lebih lanjut.
            </Text>

            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>&bull; Kelompok lansia (lanjut usia) dan orang dengan masalah kesehatan menahun (kronis) seperti penyakit jantung, diabetes dan penyakit paru berisiko mengalami sakit yang serius.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Jika Anda merasa tidak sehat, demam, lelah dan batuk kering, istirahatlah yang cukup di rumah dan cukup minum. Bila keluhan berlanjut, atau disertai dengan kesulitan bernapas (sesak atau napas cepat), segera berobat ke fasilitas pelayanan kesehatan.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Jaga jarak setidaknya 1 meter dari anggota rumah tangga lainnya
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Pada saat berobat ke fasilitas layanan kesehatan gunakan masker. Apabila tidak memiliki masker, ikuti etika batuk/bersin yang benar dengan menutup mulut dan hidung dengan siku terlipat atau tisu yang langsung dibuang ke tempat sampah tertutup.
            </Text>
            
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify',
                fontStyle:'italic',
                fontWeight:'bold'
            }}>Di fasilitas layanan kesehatan
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>&bull; Tenaga kesehatan (nakes) di fasyankes akan melakukan screening suspect. Jika memenuhi kriteria suspek virus corona (COVID-19), Anda akan dirujuk ke salah satu rumah sakit (RS) rujukan yang siap menanganani COVID-19.
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>&bull; Jika tidak memenuhi kriteria suspek, Anda akan dirawat inap atau rawat jalan tergantung diagnosa dan keputusan dokter.
            </Text>


            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify',
                fontWeight:'bold'
            }}>Masker: mitos dan fakta
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Saat KLB (Kejadian Luar Biasa) semua orang ingin melakukan sesuatu yang membuat diri dan keluarganya aman dan terlindungi. Menggunakan masker terkesan logis dan naluriah untuk melindungi diri namun para ahli menemukan bahwa kebanyakan orang tidak memahami cara menggunakan masker yang benar dan secara tidak sengaja dapat mencemari dirinya karena menyentuh bagian luar masker saat melepas dan menyentuh wajah setelahnya atau tidak membuang masker secara benar.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>WHO menyarankan penggunaan masker yang rasional untuk menghindari kesia-siaan sumber daya yang berharga dan penggunaan masker yang keliru.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Gunakan masker bila batuk atau bersin-bersin
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Masker hanya efektif bila dikombinasikan dengan sering mencuci tangan pakai sabun dan air mengalir atau cairan pembersih tangan (min alkohol 60%)
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Bila menggunakan masker, maka gunakan secara benar dan membuangnya secara benar pula.
            </Text>
            
            <Text style={{
                marginBottom:(windowWidth/10-16),
                textAlign:'justify',
                fontWeight:'bold'
            }}>Memakai masker yang tepat
            </Text>
            <Text style={{
                marginLeft:(windowWidth/10-21),
                marginBottom:(windowWidth/10-16),
                textAlign:'justify'
            }}>Masker digunakan oleh orang yang batuk atau bersin atau sedang merawat suspek COVID-19. WHO memberikan panduan sbb.
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Sebelum memasang masker, cuci tangan pakai sabun dan air mengalir atau cairan pembersih tangan (minimal alkohol 60%)
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-16),
                textAlign:'justify'
            }}>&bull; Pasang masker untuk menutupi mulut dan hidung dan pastikan tidak ada sela antara wajah dan masker
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Hindari menyentuh masker saat digunakan. Bila tersentuh, cuci tangan pakai sabun dan air mengalir atau cairan pembersih tangan (minimal alkohol 60%)
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Ganti masker yag basah dengan masker baru dan jangan gunakan kembali masker yang sudah dipakai
            </Text>
            <Text style={{
                marginBottom:(windowWidth/10-26),
                marginLeft:(windowWidth/10-21),
                textAlign:'justify'
            }}>&bull; Untuk membuka masker: lepaskan dari belakang. Jangan sentuh bagian depan masker; buang segera di tempat sampah tertutup atau kantong plastik; cuci tangan pakai sabun dan air mengalir atau bila tidak tersedia, gunakan cairan pembersih tangan (minimal alkohol 60%).
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