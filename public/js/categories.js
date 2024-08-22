
import detailsMedical from "./detailsMedical.js";
import detailsBeauty from "./detailsBeauty.js";
import detailsWellness from "./detailsWellness.js";


const subcateMed = [
    //Medical
    { value: 'Rumah Sakit', text: 'Hospital' },
    { value: 'klinik medical', text: 'Medical Clinic' },
    { value: 'klinik ibu & anak', text: 'Maternity Clinic' },
    { value: 'klinik gigi', text: 'Dentist' },
    { value: 'Klinik Fisioterapi', text: 'Fisioterapi' },
    { value: 'Klinik Tumbuh Kembang Anak', text: 'Klinik Tumbuh Kembang Anak' },
    { value: 'Laboratorium', text: 'Laboratorium' },
];

const subcateWell = [
    //Wellness
    { value: 'Basket Ball Court', text: 'Basketball Court' },
    { value: 'Club House', text: 'Club House' },
    { value: 'Gym', text: 'Gym' },
    { value: 'Pilates Studio', text: 'Pilates Studio' },
    { value: 'Stadion', text: 'Stadion' },
    { value: 'Swimming Pool', text: 'Swimming Pool' },
    { value: 'Tennis Court', text: 'Tennis Court' },
    { value: 'Yoga Studio', text: 'Yoga Studio' },
    { value: 'Massage &/ Spa', text: 'Massage & Spa' },
    { value: 'Massage sakit & cedera', text: 'Massage sakit & cedera' },
    { value: 'Massage &/ Spa Baby', text: 'Massage & Spa Baby' },
];

const subcateBeu = [
    //Beauty
    { value: 'klinik gigi & kecantikan', text: 'Klinik Kecantikan & Gigi' },
    { value: 'Klinik Kulit & Kecantikan', text: 'Skincare' },
];


const categoryOptionsExport = [
    { value: 'medical', text: 'Medical', values: subcateMed, data: detailsMedical },
    { value: 'beauty', text: 'Beauty', values: subcateBeu, data: detailsBeauty},
    { value: 'wellness', text: 'Wellness', values: subcateWell, data: detailsWellness},
];


export default categoryOptionsExport; 
