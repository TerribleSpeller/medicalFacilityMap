const tenantDetails = [
    //[Place Name, Website, Address, Phone Number, Latitude, Longitude, Rating, RatingNum, IG Followers],
    [ //Hospitals
        ["Eka Hospital", "https://www.ekahospital.com/hospital/eka-hospital-bsd", "Central Business District, Jl. Boulevard BSD Tim. Lot IX, Lengkong Gudang, Kec. Serpong, Kota Tangerang Selatan, Banten 15321", "02125655555", -6.298980440993006, 106.66989305150668, 3.7, 3111, 64100],
        ["RS Columbia Asia BSD", "https://www.columbiaasia.com/indonesia/", "BSD Serpong, Jl. Letnan Sutopo No.7 Kavling Komplek 3A, Lengkong Wetan, Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "0215372296", -6.284318451169408, 106.6676051395337, 4.1, 1501, 7157],
        ["RSU Hermina Serpong", "https://herminahospitals.com/id/branch/hermina-serpong.html", "Jl. Raya Puspitek No.km 1 No 99, Buaran, Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "02175884999", -6.346576508694822, 106.68569702413012, 4.0, 3232, 12700],
        ["RS RIS Hospital BSD", "https://rishospital.com/", "Jl. Lengkong Gudang Timur Raya No.777, BSD CITY, Kec. Serpong, Kota Tangerang Selatan, Banten 15321", "02129660950", -6.294478629948892, 106.68430998717082, 3.6, 771, 12300],
        ["RS THT Proklamasi BSD", "https://rsthtproklamasibsd.id/", "Jalan Commercial Park Central Business Of District Bsd, Jl. Pahlawan Seribu No.7, Lengkong Gudang, Kec. Serpong, Kabupaten Tangerang, Banten 15321", "02129002929", -6.296050452039191, 106.66850565016036, 3.9, 205, 0],
        ["RS Permata Dalima Serpong", "https://rspermata.co.id/hospital/rs-permata-dalima-serpong", "Jalan Rawa Buntu Utara Sektor I.2, Blok UA No.26-27, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15311", "0215376002", -6.3030800496103865, 106.67971403953396, 4.6, 100, 5403],
        ["RS Khusus Dharma Graha", "https://rskjiwadharmagraha.com/", "RS. Khusus Dharma Graha, BSD Jl. Raya Astek No.17, Lengkong Gudang Tim., Kec. Serpong, Kota Tangerang Selatan, Banten 15321", "0215388427", -6.293138158314533, 106.686690448158, 4.5, 122, 931]
    ],
    [ //Klink Medical
        ["Klinik Pratama Atma Jaya BSD", "", "Jl. Raya Cisauk Lapan No.A2/10, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345", "082122903744", -6.317936421021633, 106.65033746836981, 4.8, 32, 0],
        ["Klinik Al-Bantani", "", "Treepark Apartment Serpong Sunburst CBD LotII/17 Ruko No CG12, Lengkong Gudang, Kec. Serpong, Kota Tangerang Selatan, Banten 15345", "081387119358", -6.298265221850457, 106.66443763953382, 5.0, 7, 0],
        ["SHALOM CLINIC - Serve with Love", "", "Jl. Pahlawan Seribu, Ruko BSD Junction Gallery Shop A 48-50, Indonesia, Kota Tangerang Selatan, Lengkong Wetan, Serpong Sub-District, South Tangerang City, Banten 15321", "02153156111", -6.283868329330223, 106.66499118371281, 4.7, 250, 0],
        ["Klinik Pratama e-Clinic by dr. Giovanna Eunike", "", "Ruko Golden Boulevard 2 Blok S-07, Jelupang, Serpong Utara, South Tangerang City, Banten 15310", "087735354515", -6.276175135584063, 106.66211103953376, 5.0, 18, 580],
        ["Klinik Dokter Nidya", "", "Jl. Raya Pagedangan Jl. Cicayur I No.2, RT.01/RW.03, Pagedangan, Kec. Pagedangan, Kabupaten Tangerang, Banten 15339", "08111222182", -6.296535501348193, 106.6253407241907, 4.6, 160, 0],
        ["KLINIK AMIRA BSD (HEALTHCARE & BPJS)", "https://www.amiramedika.co.id/", "Jl. Ciater Raya No.7A Blok A1, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "08111885066", -6.309065171987688, 106.6798328143991, 4.7, 1609, 0],
        ["Klinik Satriabudi Dharma Medika", "http://kliniksatriabudi.com/", "Ruko C-17 - Pasar Modern Intermoda - BSD, Jl. Raya Cisauk Lapan, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 14313", "089658868769", -6.320475602975151, 106.64266282419094, 4.9, 25, 0],
        ["Klinik Selaras BSD", "", "Jl. Pahlawan Seribu Ruko BSD Sektor IV, Bumi serpong Damai No.43-45 Blok E, Lengkong Wetan, Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "0215370310", -6.280937647329687, 106.66371185487695, 3.5, 399, 565],
        ["Klinik Dokter Siti Nurlaela dan Laboratorium", "https://m.facebook.com/Laboratorium.Klinik.Lestari", "Jl. Raya Pagedangan, Pagedangan, Kec. Pagedangan, Kabupaten Tangerang, Banten 15339", "081298276220", -6.296585501351202, 106.62396815487699, 3.9, 16, 0],
        ["Dr. Tan Shot Yen", "", "Gedung perkantoran Bidex, Blok G no 22, BSD City (Sebelum Teras Kota mal, Jl. Pahlawan Seribu, Lengkong Gudang, Kec. Serpong, Kota Tangerang Selatan, Banten 15321", "02153164347", -6.293718717775428, 106.66779195487707, 4.1, 39, 0, 880000],
        ["Praktek Dokter Charlis", "", "Jl. Alamanda No.1 Blok B, Rawa Buntu, Serpong Sub-District, South Tangerang City, Banten 15310", "0215381663", -6.303110394254201, 106.68068821069818, 5.0, 16, 0],
        ["Dokter Benny Atnil", "", "Jalan Giri Loka 3 Z1, Jl. Komp. Bsd No.9, Lengkong Wetan, Serpong Sub-District, South Tangerang City, Banten 15310", "087886076622", -6.285253613789688, 106.67587885672741, 3.7, 3, 0],
        ["Dr Bahtiar Suhadi", "", "Komplek Anggrek Loka, Jalan Anggrek Mawar Blok C No. 1B, Sektor 2.1, BSD City, Serpong, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15318", "0215372501", -6.304123822681926, 106.6697951800117, 4.9, 6, 0],
        ["Klinik Dokter Popy Istianti", "http://www.klinikdrpopy.com/", "Jalan Ciater Raya RJ 3, Nusa Loka, sektor XIV Jl. Komp. BSD No.6, Rawa Buntu, Serpong Sub-District, South Tangerang City, Banten 15310", "0818566177", -6.3138083547661, 106.69822202789177, 5.0, 152, 0],
        ["Dr Ellysa Virgiana Suhadi", "", "Komplek Anggrek Loka, Jalan Anggrek Mawar Blok C No. 1B, Sektor 2.1, BSD City, Serpong, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15318", "", -6.30425179017617, 106.6698702818622, 5.0, 1, 0],
        ["Klinik Dianandi", "https://klinikdianandi.com/", "Ruko victory Jl. Ciater Raya No.1, RT.5/RW.7, Ciater, Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "082249108400", -6.314081864888356, 106.69704352604137, 4.7, 212, 0],
        ["Klinik Raja Medika", "", "Jl. Ciater Bar. Jl. Raya Viktor Bsd No.27D, Ciater, Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "02129666007", -6.323324399937654, 106.6826966417728, 4.7, 393, 330],
        ["Sehat Plus Medical Clinic - BSD", "https://sehatplusbsd.com/", "Ruko BSD Sektor 7, Jl. Pahlawan Seribu Blok RM No.39, Lengkong Wetan, Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "087833683388", -6.28138976292287, 106.6627738241907, 5.0, 495, 852],
        ["Klinik Bina Medical Center", "https://binamedicalcenter.com/", "Blok B1 no 10, Jl. Ciater Raya, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15318", "02138929007", -6.30771859930964, 106.67802643768346, 5.0, 19, 77]
    ],
    [ //klink ibu & anak
        ["Klinik Promptus", "", "Ruko Tol Boulevard Jalan Pelayangan.blok B6~7, RW.1, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "081312148988", -6.306540510229745, 106.67208524323469, 4.9, 476, 3395],
        ["Klinik Utama Rawat Inap Archa Medica", "", "Jl. Rawa Buntu Utara 1 sektor 1.4 Blok H1 No.2, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15318", "02153153535", -6.300690097293278, 106.6781961548771, 4.7, 39, 0],
        ["Archa Clinic", "", "PM88+C47, Jl. Kapten Soebijanto Djojohadikusumo, Lengkong Wetan, Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "02153162096", -6.283933806019942, 106.66530736346779, 3.4, 24, 0],
        ["Klinik Utama BumilQ", "https://bumilqklinik.com/", "Bsd city, Icon, Business Park, R/03, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345", "081210810549", -6.317729529109918, 106.64585352604134, 4.9, 128, 1597],
        ["KMNC BSD", "https://kmnc.co.id/", "Ruko Horizon Broadway M2 no 29, Kabupaten Tangerang, Banten 15345", "08111028232", -6.31513822009053, 106.64687625487704, 5.0, 84, 0]
    ],
    [ //Klinki Gigi
        ["Royal Dental Art", "https://www.royaldentalart.com/", "Ruko Icon Business Park, Jln No.G2, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345", "08170116161", -6.316322055850909, 106.65167012234024, 5.0, 22, 604],
        ["The Smile Orthodontic & Aesthetic Dental Clinic", "https://thesmileorthodontic.com/", "Ruko Golden Madrid 2, Jl. Letnan Sutopo No.05 Blok F, Rw. Mekar Jaya, Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "087712000300", -6.3049599345791165, 106.6865100125486, 5.0, 215, 504],
        ["Klinik Gigi BSD - Damessa Family Dental Care", "https://damessa.id/", "Ruko Provence Suites, Jl. Letnan Sutopo No.10 Blok A1, Lengkong Wetan, Kec. Serpong, Kota Tangerang Selatan, Banten 15322", "08111859009", -6.284216398405956, 106.67130327022011, 5.0, 325, 318],
        ["Be U Dental Care", "https://sites.google.com/view/be-u-dental-care", "Apartemen Saveria Ruko R11 lt. 2, Sampora, Cisauk, Tangerang Regency, Banten 15345", "087880919171", -6.306680212683187, 106.65202006651913, 5.0, 2, 0],
        ["Golden Smile Dental Clinic BSD", "http://bit.ly/3KSFKLf", "Ruko Tol Boulevard Blok G no 19, BSD City, Kota Tangerang Selatan, Banten 15322", "081386586161", -6.300965413249942, 106.66859068371288, 5.0, 1429, 839],
        ["BSD Dental Care", "", "Jl. Anggrek Loka Blok AF No. 61, Sektor 22, RT.2/RW.02, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15318", "081318878779", -6.300224156807934, 106.67113305487699, 4.9, 112, 0],
        ["Kartika Dental Clinic", "", "Ruko Bidex C.10 BSD, Jl. Pahlawan Seribu, Lengkong Gudang, Kec. Serpong, Kota Tangerang Selatan, Banten 15321", "087718182999", -6.294567325724786, 106.66714547022025, 5.0, 9, 759],
        ["Aesthetics Dental Care (ADC Smile Center)", "https://www.adcsmiles.co/", "North Point Commercial Navapark Unit 07, BSD City, Banten 15331", "081288721800", -6.2884007438253695, 106.65336598186225, 4.9, 163, 4461],
        ["Dokgi Dental Clinic BSD | Klinik Dokter Gigi Terbaik | Invisalign Platinum Provider and Damon Expert Center", "https://dokgidentalclinic.com/", "G17 BSD, Ruko Tol Boulevard, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "082163536161", -6.301054157216481, 106.66858116651923, 5.0, 309, 15400],
        ["DentaLounge", "https://www.dentalounge.co.id/en/", "TreePark Commercial & Apartment, 2nd fl. Suite C-08B, Jl. Sunburst CBD Jl. KAV P&K II No.18 C, Lengkong Gudang, BSD, Kota Tangerang Selatan, Banten 15311", "087782275999", -6.29820117619338, 106.66468205487695, 5.0, 113, 0],
        ["IPON Dental Care BSD", "https://ipondental.com/", "Ruko Paris Square B2/1, Jl. Boulevard BSD Timur, BSD City, Lengkong Gudang Tim., Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "08175276161", -6.293975208921205, 106.67859359324832, 4.9, 159, 956],
        ["INI Dental Clinic - Klinik Gigi INI Dental BSD", "", "Jl. Rawa Buntu Utara No.25 Sektor I.2, Blok V2, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "081381385810", -6.298445088072624, 106.6818429026726, 5.0, 160, 1034],
        ["Audy Dental BSD | Klinik Dokter Gigi Spesialis", "https://www.audydental.com/", "Ruko Golden Boulevard Blok Q No.3 BSD city, Jl. Pahlawan Seribu, Lengkong Karya, Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15310", "02153161399", -6.276993497000545, 106.6610428701087, 4.9, 2904, 116000],
        ["Kidz Dental Care and Orthodontic Clinic BSD", "https://kidzdental.co.id/", "BSD City, Ruko Golden Madrid 1 Blok B No.18, Rw. Mekar Jaya, Kec. Serpong, Kota Tangerang Selatan, Banten 15310", "02153160431", -6.303064478061127, 106.68549525286772, 4.8, 169, 51300],
        ["Charis Dental Care", "http://www.charisdentalcare.com/",]





    ]

    ["UNION DENTAL CLINIC (UDC)", "https://www.charisdentalcare.com/"],
    ["ORTHOPOINT Dental Clinic", "https://sites.google.com/view/uniondentalclinic"],
    ["ODAC BSD", "https://orthopointdental.com/"],
    ["S&S Aesthetic & Dental Clinic", "https://odac-corp.com/"],
    ["Erha Clinic BSD", "https://erhaultimate.co.id/find-clinic/bsd-serpong"],
    ["HAYYU Skin Clinic | Klinik Kecantikan Khusus Wanita BSD Tangerang", "https://hayyu.id/location?kota=tangerang%20selatan"],
    ["ZAP Clinic BSD Tangerang", "https://zapclinic.com/"],
    ["Jasper Skincare BSD", "https://jasperskin.com/"],
    ["DREAM DERMIS Klinik Estetika, BSD Serpong", "https://dreamdermis.com/"],
    ["Klinik Calysta Skin Care Bumi Serpong Damai Tangerang selatan", "https://calystaskincare.co.id/"],
    ["CBC BEAUTY CARE BSD", "https://cbcaestheticcenter.com/"],
    ["Wijaya Platinum Bsd", "https://wijayaplatinum.com/treatment"],
    ["Klinik Estetika dr. Affandi - BSD", "https://klinikestetika.com/"],
    ["Dea Mirabelle BSD City", "https://deamirabelle.business.site/"],
    ["BM Derma Clinic BSD", "https://bmderma.com/"],
    ["B Clinic BSD", "https://b-clinic-bsd.business.site/"],
    ["Sozo Skin Clinic", "https://sozoskinclinic.com/"],
    ["Farmanina Aesthetic & Hair Clinic BSD", "https://farmaninaclinic.com/"],
    ["Clinderma Aesthetic Clinic", "https://www.heystetik.com/clinic/about/287"],
    ["Klinik Utama The Specialist", "https://www.thespecialist-clinic.com/"],
    ["SKIN+ by Euromedica - AEON Mall BSD Tangerang", "https://skinplusclinic.com/"],
    ["Skin's Essential Clinic (SEC) BSD", "https://www.sec-clinic.com/index.php"],
    ["First Physio BSD - Fisioterapi, Sports Massage, Fitness", "https://firstphysio.id/"],
    ["Recovery Physiotherapy Center", "https://recoveryklinik.net/"],
    ["Klinik Tumbuh Kembang Anak Superkidz BSD", "https://www.superkidz.id/"],
    ["Pusat Terapi & Tumbuh Kembang Anak Terapeutik BSD", "https://terapeutik.id/?gclid=CjwKCAiAuYuvBhApEiwAzq_YiYgn2E4vZBdfoXWXg4luktA2YE4ehPgeJd2-Br28Pr_lwcapxtdjsxoCe3AQAvD_BwE"],
    ["Klinik ASA Tumbuh Kembang Anak BSD", "https://kliniktumbuhkembanganakasa.business.site/"],
    ["Klinik Anakku dan Terapi Anak Berkebutuhan Khusus", "https://klinikanakku-bsd.com/"],
    ["Anak Pelangi Center", "https://www.anakpelangicenter.com/"],
    ["Prodia BSD", "https://prodia.co.id/"],
    ["Bio Medika BSD", "https://biomedika.co.id/"],
    ["Biomedilab BSD", "https://www.biomedilab.co.id/"],
    ["PATHLAB BSD", "https://pathlabindonesia.co.id/"]
]

export default tenantDetails;