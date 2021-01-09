//  Method date
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var d = new Date();
const ms2March = 1583125806631;
const msPerDay = 86400000;
const msNow    = d.getTime();

const date = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() ;
const date_start_end = "2 " + months[2] + " - " + d.getDate() + " " + months[d.getMonth()]
const tanggal = (d.getDate()-1)+ " " + months[d.getMonth()] + " - " + d.getDate() + " " + months[d.getMonth()]
const day = 'Hari ke - ' + Math.round((msNow - ms2March) / msPerDay) + ` (${date_start_end}) `  

// URL API
const url = 'https://api.kawalcorona.com/indonesia'


function _back (){
    const navigation = useNavigation()
    navigation.goBack()
}


export {
    date,
    url,
    _back,
    tanggal,
    day,
    date_start_end
}