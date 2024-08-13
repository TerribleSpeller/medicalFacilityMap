import detailsMedical from "./detailsMedical.js";
import detailsBeauty from "./detailsBeauty.js";
import detailsWellness from "./detailsWellness.js";

const mapBounds = [
    { lat: -6.3014897268225445, lng: 106.69998806230103 }, //TOll
    { lat: - 6.309217160868853, lng: 106.70650074544457 },
    { lat: - 6.3457350359951565, lng: 106.70900436795642 },
    { lat: -6.346283202023245, lng: 106.67177855877847 },
    { lat: -6.339416434449146, lng: 106.67214761859503 },
    { lat: -6.331418448454544, lng: 106.67343819607758 },
    { lat: -6.32738168205835, lng: 106.67154028801502 },
    { lat: -6.325646240081407, lng: 106.66895913304991 },
    { lat: -6.324325791195333, lng: 106.66345519966845 },
    { lat: -6.322477156878111, lng: 106.66250624540795 },
    { lat: -6.32062851616291, lng: 106.66273399437546 },
    { lat: -6.320930335398487, lng: 106.6588622610094 },
    { lat: -6.322062156368395, lng: 106.6573059763981 },
    { lat: -6.3224394294746, lng: 106.65582560810928 },
    { lat: -6.322778975034844, lng: 106.65332036946668 },
    { lat: -6.323269429339362, lng: 106.64447611789508 },
    { lat: -6.324174882217734, lng: 106.64291983328378 },
    { lat: -6.325080333510266, lng: 106.6399211385449 },
    { lat: -6.325695735038376, lng: 106.6381502543559 },
    { lat: -6.326035278459913, lng: 106.6373910911309 },
    { lat: -6.326186186575659, lng: 106.63644213709959 },
    { lat: -6.3259975514241, lng: 106.63469606168204 },
    { lat: -6.325959824385514, lng: 106.63249448832946 },
    { lat: -6.325959824385514, lng: 106.63165940878191 },
    { lat: -6.327129361300678, lng: 106.62930600278433 },
    { lat: -6.327921626739304, lng: 106.62816725794677 },
    { lat: -6.328017324263055, lng: 106.62741612161562 },
    { lat: -6.3291491297154066, lng: 106.62058365259035 },
    { lat: -6.331035466625153, lng: 106.61549725898264 },
    { lat: -6.332242718631482, lng: 106.61507971920888 }, //Hiera
    { lat: -6.3382386276845954, lng: 106.59344076051325 },
    { lat: -6.33122365841108, lng: 106.59190016786913 },
    { lat: -6.325276883933458, lng: 106.5933332773055 },
    { lat: -6.321324199569559, lng: 106.59304665541823 },
    { lat: -6.32143102927395, lng: 106.59351241598506 },
    { lat: -6.320880175697373, lng: 106.59329894015711 },
    { lat: -6.317809045698733, lng: 106.59347060152965 },
    { lat: -6.308638201850198, lng: 106.59415724701987 },
    { lat: -6.303622305729227, lng: 106.59201400926592 },
    { lat: -6.3014820874672735, lng: 106.59755929891142 },
    { lat: -6.294645127787306, lng: 106.59811486792843 },
    { lat: -6.2930238099574956, lng: 106.59939137114073 },
    { lat: -6.290082053685635, lng: 106.60098159400935 },
    { lat: -6.285366107493767, lng: 106.60334641943065 },
    { lat: -6.283472745874428, lng: 106.60371679877532 },
    { lat: -6.282867920571838, lng: 106.60580679650603 },
    { lat: -6.282760943393676, lng: 106.60940566689321 },
    { lat: -6.278292925512158, lng: 106.61387935954647 },
    { lat: -6.279055244072174, lng: 106.61643575534833 },
    { lat: -6.279931212527041, lng: 106.62053388237706 },
    { lat: -6.280037282125655, lng: 106.62101407710624 },
    { lat: -6.278512274627524, lng: 106.62046692658035 },
    { lat: -6.276933928497905, lng: 106.62099263953378 },
    { lat: -6.275922505978579, lng: 106.62149869399788 },
    { lat: -6.27438390298868, lng: 106.62191744337588 },
    { lat: -6.273841302783082, lng: 106.62206699672515 },
    { lat: -6.27374467528995, lng: 106.62453462698834 },
    { lat: -6.273937930258302, lng: 106.62546933542134 },
    { lat: -6.27422781257647, lng: 106.6259179954692 },
    { lat: -6.274807384807987, lng: 106.62584857329428 },
    { lat: -6.275164837857519, lng: 106.62653651815252 },
    { lat: -6.275330613101619, lng: 106.6271879810865 },
    { lat: -6.275807216634565, lng: 106.62794888979333 },
    { lat: -6.275340974052619, lng: 106.62859514102381 },
    { lat: -6.273947424292954, lng: 106.62831370903635 },
    { lat: -6.273836559828457, lng: 106.62845059554995 },
    { lat: -6.273796903839001, lng: 106.64930179553293 },
    { lat: -6.2730656384557175, lng: 106.65031123700051 },
    { lat: -6.270481330403994, lng: 106.65178633970811 },
    { lat: -6.269051707681118, lng: 106.65174946214042 },
    { lat: -6.2681023774364295, lng: 106.6500070778604 },
    { lat: -6.26612847568578, lng: 106.64729781142931 },
    { lat: -6.260053707954297, lng: 106.64911425142287 },
    { lat: -6.262515243681187, lng: 106.65398189189519 },
    { lat: -6.263510888862522, lng: 106.66216361010378 },
    { lat: -6.271151362182371, lng: 106.66870516328147 },
    { lat: -6.271755198438493, lng: 106.67756511271236 },
    { lat: -6.2744641558736385, lng: 106.68038545588182 },
    { lat: -6.281427630656982, lng: 106.68627123760002 },
    { lat: -6.28666370938345, lng: 106.685070437474 },
    { lat: -6.299701678384582, lng: 106.69597810319142 },
    { lat: -6.3014897268225445, lng: 106.69998806230103 }, //TOll

];

let map;
let service;
let infowindow;
let currentSelection;
let ratingFilterNumber = 0; //At the start they want it to be anywhere
let openingHoursFilter = "Anytime"; //And anytime
let instaCheck = false;
let specificDayCheck = false;
let markers = [];

const mapCenter = { lat: -6.302630388, lng: 106.6505807 };

function loadGoogleMapsAPI(apiKey, callback) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=${callback}`;
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);
}
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: mapCenter,
        zoom: 14,
        minZoom: 14,
        restriction: {
            latLngBounds: {
                west: 106.58962119204718,
                north: -6.256977574626499,
                south: -6.348283202023245,
                east: 106.71154028801502,
            }
        },
        disableDefaultUI: true,
        mapId: "f7d3a585e09d991",
        clickableIcons: false,
    });

    infowindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);

    const BSDBoundary = new google.maps.Polyline({
        path: mapBounds,
        geodesic: true,
        strokeColor: "#1e2d80",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    BSDBoundary.setMap(map);
    // const centerControlDiv = document.createElement("div");
    // const centerControl = createCenterControl(map);
    // // centerControlDiv.classList.add("px-1");
    // centerControlDiv.appendChild(centerControl);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);
    const dropDownCategory = dropdownCategoryFunc(map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(dropDownCategory);
    const dropdownSubCategory = dropdownSubCategoryFunc(map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(dropdownSubCategory);
    const moreFiltersCategory = moreFiltersFunc(map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(moreFiltersCategory);
    const promoCategory = promoFunc(map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(promoCategory);
    const ratingCategory = RatingFunc(map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(ratingCategory);
    const hourCategory = hourFunc(map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(hourCategory);
    const socialCategory = socialFunc(map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(socialCategory);
    // const lessFiltersCategory = lessFiltersFunc(map);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(lessFiltersCategory);
    const contactUs = contactUsFunc(map);
    map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(contactUs);
}
function dropdownCategoryFunc(map) {
    const dropdownCategory = document.createElement("div");
    dropdownCategory.id = "Category Dropdown";
    dropdownCategory.classList.add("px-1");
    dropdownCategory.classList.add("flex-column");
    dropdownCategory.classList.add("d-flex")
    dropdownCategory.style.margin = "8px 0 3px";
    dropdownCategory.style.padding = "0 5px";
    dropdownCategory.style.fontSize = "16px";
    dropdownCategory.style.lineHeight = "12px";
    dropdownCategory.style.width = "130px"

    const revealButtonCateogyr = document.createElement("button");
    revealButtonCateogyr.classList.add("dropbtn");
    revealButtonCateogyr.innerHTML = "Categories";
    dropdownCategory.appendChild(revealButtonCateogyr);

    const categoryOptions = [
        { value: 'medical', text: 'Medical' },
        { value: 'beauty', text: 'Beauty' },
        { value: 'wellness', text: 'Wellness' }
    ];

    const dropdownContentCategory = document.createElement("div");
    dropdownContentCategory.id = "Dropdown Category";
    dropdownContentCategory.classList.add("vertical-menu");
    dropdownContentCategory.style.width = "125px";
    dropdownContentCategory.style.display = "none";
    dropdownCategory.appendChild(dropdownContentCategory);

    revealButtonCateogyr.addEventListener("click", () => {
        if (dropdownContentCategory.style.display === "none") {
            dropdownContentCategory.style.display = "block";
        } else {
            dropdownContentCategory.style.display = "none";
        }
    });

    categoryOptions.forEach(option => {
        const button = document.createElement("button");
        button.value = option.value;
        button.id = option.value + "Button";
        button.textContent = option.text;
        button.style.width = "124px";
        button.classList.add("vertical-menu-long")
        button.style.margin = "1.0px auto";
        button.style.padding = "px";
        button.style.fontSize = "16px";
        button.style.cursor = "pointer";

        button.addEventListener("click", () => {
            //findPlace(button.value);
            var targetMenu = document.getElementById(button.value + "Dropdown");
            console.log(targetMenu)
            if (targetMenu.classList.contains("active")) {
                targetMenu.classList.remove("active");
                button.style.backgroundColor = "";
            } else {
                categoryOptions.forEach(option => {
                    var targetMenu = document.getElementById(option.value + "Dropdown");
                    targetMenu.classList.remove("active");
                    targetMenu.style.display = "none";
                    var otherButton = document.getElementById(option.value + "Button");
                    if (otherButton) { // Check if otherButton exists
                        otherButton.style.backgroundColor = ""; // Reset background color
                    }
                });

                targetMenu.classList.add("active");
                targetMenu.style.display = "block";
                button.style.backgroundColor = "#A1A1A1"; // Set background color

            }
        });

        dropdownContentCategory.appendChild(button);
    });
    return dropdownCategory;
}
function dropdownSubCategoryFunc(map) {
    const dropdown = document.createElement("div");
    dropdown.id = "Subcategory Dropdown";
    dropdown.classList.add("px-1");
    dropdown.classList.add("flex-column");
    dropdown.classList.add("d-flex")
    dropdown.style.margin = "8px 0 3px";
    dropdown.style.padding = "0 5px";
    dropdown.style.fontSize = "16px";
    dropdown.style.lineHeight = "12px";

    const revealButton = document.createElement("button");
    revealButton.classList.add("dropbtn");
    revealButton.innerHTML = "Subcategories";
    dropdown.appendChild(revealButton);

    const options = [
        { value: 'Rumah Sakit', text: 'Hospital' },
        { value: 'klinik medical', text: 'Medical Clinic' },
        { value: 'klinik ibu & anak', text: 'Maternity Clinic' },
        { value: 'klinik gigi', text: 'Dentist' },
        { value: 'Klinik Fisioterapi', text: 'Fisioterapi' },
        { value: 'Klinik Tumbuh Kembang Anak', text: 'Klinik Tumbuh Kembang Anak' },
        { value: 'Laboratorium', text: 'Laboratorium' },

    ];

    const options2well = [
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

    const options3beauty = [
        { value: 'klinik gigi & kecantikan', text: 'Klinik Kecantikan & Gigi' },
        { value: 'Klinik Kulit & Kecantikan', text: 'Skincare' },
    ];

    const dropdownContent = document.createElement("div");
    dropdownContent.id = "medicalDropdown";
    dropdownContent.classList.add("vertical-menu");
    dropdownContent.style.display = "none";
    dropdownContent.style.width = "134px";
    dropdown.appendChild(dropdownContent);

    const dropdownContent2 = document.createElement("div");
    dropdownContent2.id = "wellnessDropdown";
    dropdownContent2.classList.add("vertical-menu");
    dropdownContent2.style.display = "none";
    dropdownContent2.style.width = "134px";
    dropdown.appendChild(dropdownContent2);


    const dropdownContent3 = document.createElement("div");
    dropdownContent3.id = "beautyDropdown";
    dropdownContent3.classList.add("vertical-menu");
    dropdownContent3.style.display = "none";
    dropdownContent3.style.width = "134px";
    dropdown.appendChild(dropdownContent3);


    revealButton.addEventListener("click", () => {
        if (dropdownContent.classList.contains("active")) {
            if (dropdownContent.style.display === "none") {
                dropdownContent.style.display = "block";
            } else {
                dropdownContent.style.display = "none";
            }
        } else if (dropdownContent2.classList.contains("active")) {
            if (dropdownContent2.style.display === "none") {
                dropdownContent2.style.display = "block";
            } else {
                dropdownContent2.style.display = "none";
            }
        } else if (dropdownContent3.classList.contains("active")) {
            if (dropdownContent3.style.display === "none") {
                dropdownContent3.style.display = "block";
            } else {
                dropdownContent3.style.display = "none";
            }
        } else {
            dropdownContent.style.display = "none";
            dropdownContent2.style.display = "none";
            dropdownContent3.style.display = "none";
        }

    });

    options.forEach(option => {
        const button = document.createElement("button");
        button.value = option.value;
        button.textContent = option.text;
        button.classList.add("vertical-menu-long")
        button.style.margin = "1.0px auto";
        button.style.fontSize = "14px";
        button.style.width = "134px";
        button.style.cursor = "pointer";

        button.addEventListener("click", () => {
            options.forEach(opt => {
                const otherButton = document.querySelector(`button[value="${opt.value}"]`);
                if (otherButton) {
                    otherButton.style.backgroundColor = "";
                }
            });
            if(button.style.backgroundColor === "rgb(161, 161, 161)"){
                button.style.backgroundColor = "";
            } else {
                button.style.backgroundColor = "#A1A1A1";
            }
            findPlace(button.value);
        });

        dropdownContent.appendChild(button);
    });

    options2well.forEach(option => {
        const button = document.createElement("button");
        button.value = option.value;
        button.textContent = option.text;
        button.classList.add("vertical-menu-long")
        button.style.margin = "1.0px auto";
        button.style.fontSize = "14px";
        button.style.width = "134px";

        button.style.cursor = "pointer";

        button.addEventListener("click", () => {
            options2well.forEach(opt => {
                const otherButton = document.querySelector(`button[value="${opt.value}"]`);
                if (otherButton) {
                    otherButton.style.backgroundColor = "";
                }
            });
            if(button.style.backgroundColor === "rgb(161, 161, 161)"){
                button.style.backgroundColor = "";
            } else {
                button.style.backgroundColor = "#A1A1A1";
            }
            findPlace(button.value);
        });

        dropdownContent2.appendChild(button);
    });

    options3beauty.forEach(option => {
        const button = document.createElement("button");
        button.value = option.value;
        button.textContent = option.text;
        button.classList.add("vertical-menu-long")
        button.style.margin = "1.0px auto";
        button.style.fontSize = "14px";
        button.style.width = "134px";
        button.style.cursor = "pointer";

        button.addEventListener("click", () => {
            options3beauty.forEach(opt => {
                const otherButton = document.querySelector(`button[value="${opt.value}"]`);
                if (otherButton) {
                    otherButton.style.backgroundColor = "";
                }
            });
            if(button.style.backgroundColor === "rgb(161, 161, 161)"){
                button.style.backgroundColor = "";
            } else {
                button.style.backgroundColor = "#A1A1A1";
            }
            findPlace(button.value);
        });

        dropdownContent3.appendChild(button);
    });
    return dropdown;
}
function moreFiltersFunc(map) {
    const moreFiltersContainer = document.createElement("div");
    const moreFilters = document.createElement("div");
    moreFilters.id = "moreFilters";
    moreFilters.classList.add("px-1");
    moreFilters.classList.add("flex-column");
    moreFilters.classList.add("d-flex")
    moreFilters.style.margin = "8px 0 3px";
    moreFilters.style.padding = "0 5px";
    moreFilters.style.fontSize = "16px";
    moreFilters.style.lineHeight = "12px";
    moreFilters.style.width = "140px";

    const moreFiltersButton = document.createElement("button");
    moreFiltersButton.classList.add("dropbtn");
    moreFiltersButton.innerHTML = "Show Filters";
    moreFiltersButton.addEventListener("click", () => {
        const promoFilter = document.getElementById("promoFilter");
        const ratingFilter = document.getElementById("ratingFilter");
        const hourFilter = document.getElementById("hourFilter");
        const socialFilter = document.getElementById("socialFilter");
        if (moreFiltersButton.innerHTML == "Hide Filters") {
            promoFilter.style.zIndex = "-500";
            ratingFilter.style.zIndex = "-500";
            hourFilter.style.zIndex = "-500";
            socialFilter.style.zIndex = "-500";
            moreFiltersButton.innerHTML = "Show Filters";
        } else {
            promoFilter.style.zIndex = "1";
            ratingFilter.style.zIndex = "1";
            hourFilter.style.zIndex = "1";
            socialFilter.style.zIndex = "1";
            moreFiltersButton.innerHTML = "Hide Filters";
        }

    });

    moreFilters.appendChild(moreFiltersButton);
    moreFiltersContainer.appendChild(moreFilters);

    return moreFiltersContainer;
}
function promoFunc(map) {
    const promoFilterContainer = document.createElement("div");
    const promoFilter = document.createElement("div");
    promoFilter.id = "promoFilter";
    //promoFilter.classList.add("px-1");
    promoFilter.classList.add("flex-column");
    promoFilter.classList.add("d-flex")
    promoFilter.style.margin = "8px 0 3px";
    promoFilter.style.padding = "0 5px";
    promoFilter.style.fontSize = "16px";
    promoFilter.style.lineHeight = "12px";
    // promoFilter.style.display = "none";
    promoFilter.style.display = "block";
    promoFilter.style.zIndex = -500;
    // promoFilter.style.width = "0px";
    promoFilter.style.width = "120px"
    // promoFilter.style.left = "255px";

    const PromosButton = document.createElement("button");
    PromosButton.classList.add("dropbtn");
    PromosButton.innerHTML = "Promos";
    promoFilter.appendChild(PromosButton);
    promoFilterContainer.appendChild(promoFilter);

    const PromoDiv = document.createElement("div");
    PromoDiv.classList.add("vertical-menu-long", "border", "border-black");
    PromoDiv.style.margin = "1.0px auto";
    PromoDiv.style.padding = "10px";
    PromoDiv.style.fontSize = "16px";
    PromoDiv.style.cursor = "pointer";
    PromoDiv.style.width = "110px";
    PromoDiv.style.display = "none";
    PromoDiv.style.position = "relative";
    PromoDiv.style.backgroundColor = "#f0f0f0"
    PromoDiv.innerHTML = `
        <div class="checkbox-wrapper-1" style="background-color=#f0f0f0;">
            <input id="example-1" class="substituted" type="checkbox" aria-hidden="true" />
            <label for="example-1">Show?</label>
        </div>
        `
    promoFilter.appendChild(PromoDiv);
    PromosButton.addEventListener("click", () => {
        if (PromoDiv.style.display === "none") {
            PromoDiv.style.display = "block";
        } else {
            PromoDiv.style.display = "none";
        }
    });
    return promoFilter;
}
function RatingFunc(map) {
    const ratingFilterContainer = document.createElement("div");
    const ratingFilter = document.createElement("div");
    ratingFilter.id = "ratingFilter";
    //ratingFilter.classList.add("px-1");
    ratingFilter.classList.add("flex-column");
    ratingFilter.classList.add("d-flex")
    ratingFilter.style.margin = "8px 0 3px";
    // ratingFilter.style.padding = "0 5px";
    ratingFilter.style.fontSize = "16px";
    ratingFilter.style.lineHeight = "12px";
    // ratingFilter.style.display = "none";
    ratingFilter.style.display = "block";
    ratingFilter.style.zIndex = -1000;
    // ratingFilter.style.position = "relative";
    // ratingFilter.style.width = "0px";
    ratingFilter.style.width = "120px";

    const RatingButton = document.createElement("button");
    RatingButton.classList.add("dropbtn");
    RatingButton.innerHTML = "Rating";
    ratingFilter.appendChild(RatingButton);
    ratingFilterContainer.appendChild(ratingFilter);

    const RatingDiv = document.createElement("div");
    RatingDiv.classList.add("vertical-menu-long", "border", "border-black")
    RatingDiv.style.margin = "1.0px auto";
    RatingDiv.style.padding = "10px";
    RatingDiv.style.fontSize = "16px";
    RatingDiv.style.cursor = "pointer";
    RatingDiv.style.display = "none";
    RatingDiv.style.position = "relative";
    RatingDiv.style.backgroundColor = "#f0f0f0"
    RatingDiv.style.height = "62px";
    RatingDiv.innerHTML = `
        <div class="slidecontainer " style="background-color=#f0f0f0;">
            <input type="range" min="0" max="5" value="0" class="slider" id="ratingRange">
            <p class="mt-2" style="margin:0;">Value: <span id="result" >0</span></p>
        </div>`
    ratingFilter.appendChild(RatingDiv);

    RatingButton.addEventListener("click", () => {
        if (RatingDiv.style.display === "none") {
            RatingDiv.style.display = "block";
        } else {
            RatingDiv.style.display = "none";
        }
    });

    return ratingFilter;
}
function hourFunc(map) {
    const hourFilterContainer = document.createElement("div");
    const hourFilter = document.createElement("div");
    hourFilter.id = "hourFilter";
    // hourFilter.classList.add("px-1");
    hourFilter.classList.add("flex-column");
    hourFilter.classList.add("d-flex")
    hourFilter.style.margin = "8px 0px 3px 6px";
    // hourFilter.style.padding = "0 5px";
    hourFilter.style.fontSize = "16px";
    hourFilter.style.lineHeight = "12px";
    // hourFilter.style.display = "none";
    hourFilter.style.display = "block";
    hourFilter.style.zIndex = -1000;
    // hourFilter.style.position = "relative";
    // hourFilter.style.width = "0px";
    hourFilter.style.width = "120px";

    const hourButton = document.createElement("button");
    hourButton.classList.add("dropbtn");
    hourButton.innerHTML = "Open Times";
    hourFilter.appendChild(hourButton);
    hourFilterContainer.appendChild(hourFilter);
    //For specific times
    const openingHourstContainerContainer = document.createElement("div");
    openingHourstContainerContainer.id = "openingHourstContainerContainer";
    openingHourstContainerContainer.style.display = "none";

    const openingHoursContainer = document.createElement("div");
    openingHoursContainer.id = "openingHoursContainer";
    openingHoursContainer.classList.add("flex-column", "d-flex");
    openingHoursContainer.style.fontSize = "16px";
    openingHoursContainer.style.lineHeight = "12px";
    openingHoursContainer.style.display = "none";
    //openingHoursContainer.style.zIndex = -1000;
    openingHoursContainer.style.position = "relative";
    openingHoursContainer.style.width = "0px";

    const anytimeOption = document.createElement("button");
    anytimeOption.id = "anytimeOptionButton";
    anytimeOption.innerHTML = "Anytime";
    anytimeOption.classList.add("openingHourSize");
    anytimeOption.style.margin = "1.0px auto";
    openingHoursContainer.appendChild(anytimeOption);
    anytimeOption.addEventListener("click", () => {
        if(anytimeOption.style.backgroundColor === "rgb(161, 161, 161)"){
            anytimeOption.style.backgroundColor = "#F0F0F0";
        } else {
            anytimeOption.style.backgroundColor = "#A1A1A1";
            nowOption.style.backgroundColor = "#F0F0F0";
            hours24Option.style.backgroundColor = "#F0F0F0";
            specificDayOption.style.backgroundColor = "#F0F0F0";
        }
    });

    const nowOption = document.createElement("button");
    nowOption.id = "nowOptionButton";
    nowOption.innerHTML = "Now";
    nowOption.classList.add("openingHourSize")
    nowOption.style.margin = "1.0px auto";
    openingHoursContainer.appendChild(nowOption);
    nowOption.addEventListener("click", () => {
        if(nowOption.style.backgroundColor === "rgb(161, 161, 161)"){
            nowOption.style.backgroundColor = "#F0F0F0";
        } else {
            nowOption.style.backgroundColor = "#A1A1A1";
            anytimeOption.style.backgroundColor = "#F0F0F0";
            hours24Option.style.backgroundColor = "#F0F0F0";
            specificDayOption.style.backgroundColor = "#F0F0F0";
        }
    });

    const hours24Option = document.createElement("button");
    hours24Option.id = "hours24OptionButton";
    hours24Option.innerHTML = "24 Hours";
    hours24Option.classList.add("openingHourSize")
    hours24Option.style.margin = "1.0px auto";
    openingHoursContainer.appendChild(hours24Option);
    hours24Option.addEventListener("click", () => {
        if(hours24Option.style.backgroundColor === "rgb(161, 161, 161)"){
            hours24Option.style.backgroundColor = "#F0F0F0";
        } else {
            hours24Option.style.backgroundColor = "#A1A1A1";
            anytimeOption.style.backgroundColor = "#F0F0F0";
            nowOption.style.backgroundColor = "#F0F0F0";
            specificDayOption.style.backgroundColor = "#F0F0F0";
        }
    });

    const specificDayOption = document.createElement("button");
    specificDayOption.id = "specificDayOptionButton";
    specificDayOption.innerHTML = "Specific";
    specificDayOption.classList.add("openingHourSize")
    openingHoursContainer.appendChild(specificDayOption);


    //the more specific selection
    const specificSelectionContainer = document.createElement("div");
    specificSelectionContainer.classList.add("specific-selection");
    specificSelectionContainer.style.display = "none";

    const daySelect = document.createElement("select");
    daySelect.id = "daySelect";
    daySelect.style.width = "120px";
    daySelect.disabled = true;
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    days.forEach(day => {
        const option = document.createElement("option");
        option.value = day;
        option.innerHTML = day;
        daySelect.appendChild(option);
    });
    daySelect.onchange = onDateChange();
    specificSelectionContainer.appendChild(daySelect);

    const openingTimeInput = document.createElement("select");
    openingTimeInput.disabled = true;
    openingTimeInput.id = "openingTimeInput";
    openingTimeInput.style.width = "120px";
    hours.forEach(hour => {
        const option = document.createElement("option");
        option.value = hour;
        option.innerHTML = hour;
        openingTimeInput.appendChild(option);
    });
    openingTimeInput.onchange = onDateChange();
    // openingTimeInput.classList.add("openingHourSize")
    specificSelectionContainer.appendChild(openingTimeInput);

    const closingTimeInput = document.createElement("select");
    closingTimeInput.disabled = true;
    closingTimeInput.id = "closingTimeInput";
    closingTimeInput.style.width = "120px";
    hours.forEach(hour => {
        const option = document.createElement("option");
        option.value = hour;
        option.innerHTML = hour;
        closingTimeInput.appendChild(option);
    });
    closingTimeInput.onchange = onDateChange();
    // closingTimeInput.classList.add("openingHourSize")
    specificSelectionContainer.appendChild(closingTimeInput);

    const applyButton = document.createElement("button");
    applyButton.id = "applyButton";
    applyButton.innerHTML = "Search";
    applyButton.classList.add("openingHourSize")
    // specificSelectionContainer.appendChild(applyButton);

    openingHoursContainer.appendChild(specificSelectionContainer);
    openingHourstContainerContainer.appendChild(openingHoursContainer);
    hourFilter.appendChild(openingHourstContainerContainer);

    specificDayOption.addEventListener("click", () => {
        if (specificSelectionContainer.style.display === "none") {
            specificSelectionContainer.style.display = "block";
            daySelect.disabled = false;
            openingTimeInput.disabled = false;
            closingTimeInput.disabled = false;
            specificDayOption.style.backgroundColor = "#A1A1A1";
            hours24Option.style.backgroundColor = "#F0F0F0";
            anytimeOption.style.backgroundColor = "#F0F0F0";
            nowOption.style.backgroundColor = "#F0F0F0";
        } else {
            specificSelectionContainer.style.display = "none";
            daySelect.disabled = true;
            openingTimeInput.disabled = true;
            closingTimeInput.disabled = true;
            specificDayOption.style.backgroundColor = "#F0F0F0";
            

        }
    });

    hourButton.addEventListener("click", () => {
        if (openingHourstContainerContainer.style.display === "none") {
            openingHourstContainerContainer.style.display = "block";
        
        } else {
            openingHourstContainerContainer.style.display = "none";
        }
    });

    return hourFilter;
}
function socialFunc(map) {
    const socialFilterContainer = document.createElement("div");
    const socialFilter = document.createElement("div");
    socialFilter.id = "socialFilter";
    socialFilter.classList.add("flex-column");
    socialFilter.classList.add("d-flex")
    socialFilter.style.margin = "8px 0px 3px 6px";
    socialFilter.style.fontSize = "16px";
    socialFilter.style.lineHeight = "12px";
    // socialFilter.style.display = "none";
    socialFilter.style.display = "block"
    socialFilter.style.zIndex = -1000;
    // socialFilter.style.position = "relative";
    // socialFilter.style.width = "0px";
    socialFilter.style.width = "120px"

    const socialButton = document.createElement("button");
    socialButton.classList.add("dropbtn");
    socialButton.innerHTML = "Socials";
    socialFilter.appendChild(socialButton);
    socialFilterContainer.appendChild(socialFilter);


    const socialButtonContent = document.createElement("div");
    socialButtonContent.id = "beautyDropdown";
    socialButtonContent.classList.add("vertical-menu");
    socialButtonContent.style.display = "none";
    socialFilter.appendChild(socialButtonContent);

    const instaOption = document.createElement("button");
    instaOption.id = "instaOptionButton";
    instaOption.innerHTML = "Instagram";
    instaOption.classList.add("openingHourSize")
    instaOption.style.margin = "1.0px auto";
    socialButtonContent.appendChild(instaOption);

    socialButton.addEventListener("click", () => {
        if (socialButtonContent.style.display === "none") {
            socialButtonContent.style.display = "block";
        } else {
            socialButtonContent.style.display = "none";
        }
    });

    instaOption.addEventListener("click", () => {
        toggleInstragram();
    });
    return socialFilter;

}
function contactUsFunc(map) {
    const contactUsContainer = document.createElement("div");
    contactUsContainer.id = "containus";
    contactUsContainer.classList.add("px-1");
    contactUsContainer.classList.add("flex-column", "dropbtn");
    contactUsContainer.classList.add("d-flex")
    contactUsContainer.style.margin = "8px 0 0px";
    contactUsContainer.style.padding = "0 5px";
    contactUsContainer.style.fontSize = "12px";
    contactUsContainer.style.lineHeight = "12px";
    contactUsContainer.innerHTML = "Contact Us to get your Place Added!";

    return contactUsContainer;
}

async function findPlace(type) {

    if (currentSelection == type) {
        console.log("Same Selection as Before.")
    } else {
        console.log("Diff Cateogry")
        currentSelection = type;
        deleteMarkers();
    }


    if (!service) {
        console.error('PlacesService is not initialized.');
        return;
    }

    const bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-6.328292948434564, 106.58962119204718), // South West
        new google.maps.LatLng(-6.256977574626499, 106.70244855795238)  // North East
    );

    const BSDPolygon = new google.maps.Polygon({
        paths: mapBounds,
    });

    const request = {
        bounds: bounds,
        type: [type],
        fields: ['name', 'geometry', 'rating', 'vicinity', 'photos', 'place_id', 'website', 'business_status', 'plus_code', 'reference', 'place_id', 'photoUrl', 'current_opening_hours', 'opening_hours']
    };

    // service.nearbySearch(request, (results, status, pagination) => { //Apparenrtly doesn't provide a lot of details i.e Website //Nevermind I suck, yes they do
    //     if (status === google.maps.places.PlacesServiceStatus.OK) {
    //         processResults(request.type, results, service, map, BSDPolygon);
    //         if (pagination && pagination.hasNextPage) {
    //             setTimeout(() => {
    //                 pagination.nextPage();
    //             }, 2000); //2 Seconds delay
    //         }

    //     } else {
    //         console.error('Place search failed:', status);
    //     }
    // });
    processResultsLocal(type, map);
}
async function processResultsLocal(type, map) {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    deleteMarkers();
    if (type == "Rumah Sakit" || type == "klinik medical" || type == "klinik ibu & anak" || type == "klinik gigi" || type == "Klinik Fisioterapi" || type == "Klinik Tumbuh Kembang Anak" || type == "Laboratorium") {
        for (let i = 0; i < detailsMedical.info.length; i++) {
            const currentPlace = detailsMedical.info[i];
            if (currentPlace.subcategory !== type) {
                console.log("Type Mismatch: ", currentPlace.subcategory, " vs ", type)
            } else {
                console.log("Type Match: ", currentPlace.subcategory, " vs ", type)
                const marker = new AdvancedMarkerElement({
                    map: map,
                    content: buildContent(currentPlace, type),
                    position: { lat: currentPlace.Lat, lng: currentPlace.Long }
                });
                marker.addListener("click", () => {
                    toggleHighlight(marker, currentPlace);
                    //console.log(currentPlace.photoURL)
                });
                marker.name = currentPlace.Nama;
                marker.rating = currentPlace.rating;
                marker.openingHours = currentPlace.openingHours;
                marker.closingHours = currentPlace.closingHours;
                marker.allDay = currentPlace.allDay;
                marker.IGFollowers = currentPlace.IGFollowers;
                markers.push(marker);

            }
        }
    }

    if (type == "Basket Ball Court" || type == "Club House" || type == "Gym" || type == "Pilates Studio" || type == "Stadion" || type == "Swimming Pool" || type == "Tennis Court" || type == "Yoga Studio" || type == "Massage &/ Spa" || type == "Massage sakit & cedera" || type == "Massage &/ Spa Baby") {
        for (let i = 0; i < detailsWellness.info.length; i++) {
            const currentPlace = detailsWellness.info[i];
            if (currentPlace.subcategory !== type) {
                console.log("Type Mismatch: ", currentPlace.subcategory, " vs ", type)
            } else {
                console.log("Type Match: ", currentPlace.subcategory, " vs ", type)
                const marker = new AdvancedMarkerElement({
                    map: map,
                    content: buildContent(currentPlace, type),
                    position: { lat: currentPlace.Lat, lng: currentPlace.Long }
                });
                marker.addListener("click", () => {
                    toggleHighlight(marker, currentPlace);
                    // console.log(currentPlace.photoURL)
                });
                marker.name = currentPlace.Nama;
                marker.rating = currentPlace.rating;
                marker.openingHours = currentPlace.openingHours;
                marker.closingHours = currentPlace.closingHours;
                marker.allDay = currentPlace.allDay;
                marker.IGFollowers = currentPlace.IGFollowers;
                markers.push(marker);
            }
        }
    }

    if (type == "klinik gigi & kecantikan" || type == "Klinik Kulit & Kecantikan") {
        for (let i = 0; i < detailsBeauty.info.length; i++) {
            const currentPlace = detailsBeauty.info[i];
            if (currentPlace.subcategory !== type) {
                console.log("Type Mismatch: ", currentPlace.subcategory, " vs ", type)
            } else {
                console.log("Type Match: ", currentPlace.subcategory, " vs ", type)
                const marker = new AdvancedMarkerElement({
                    map: map,
                    content: buildContent(currentPlace, type),
                    position: { lat: currentPlace.Lat, lng: currentPlace.Long }
                });
                marker.addListener("click", () => {
                    toggleHighlight(marker, currentPlace);
                    //console.log(currentPlace.photoURL)
                });
                marker.name = currentPlace.Nama;
                marker.rating = currentPlace.rating;
                marker.openingHours = currentPlace.openingHours;
                marker.closingHours = currentPlace.closingHours;
                marker.allDay = currentPlace.allDay;
                marker.IGFollowers = currentPlace.IGFollowers;
                markers.push(marker);
            }
        }
    }

}
function buildContent(property, type) {
    const content = document.createElement("div");
    //console.log(property)
    content.classList.add("property");
    content.classList.add("rounded-3");
    if (property.photoURL.length > 0) {
        //console.log(property.photoURL)
        content.style.backgroundImage = `url(${property.photoURL}), url("../img/noImage.png")`;
        content.style.backgroundPosition = "center top";
        content.style.backgroundSize = "contain"
    } else {
        content.style.backgroundImage = `url("../img/noImage.png")`;
        content.style.backgroundPosition = "center top";
        content.style.backgroundSize = "contain"
    }
    content.innerHTML = `
        <div class="icon rounded-3 ${instaCheck ? "" : "active"}" style =" ${instaCheck ? "opacity: 0;" : "opacity: 1;"}">
            <i aria-hidden="true" class="fa fa-icon ${typeIconProcessor(property.subcategory)}" title="${property.Nama}"></i>
            <span class="fa-sr-only">${property.Nama}</span>
        </div>
        <div class="rounded-4 insta-container ${instaCheck ? "active" : ""}"  style =" ${instaCheck ? "opacity: 1;" : "opacity: 0;"}">
            <div class="mt-1">
                <span class="mt-2" style="color: rgb(225, 48, 108); font-size: 12px"><center>${property.IGFollowers == "IGFollowers" ? 0 : property.IGFollowers}</center></span>
            </div>
        </div>
        <div class="details-container" >
            <div class="details">
                <div class="price">${property.Nama}</div>
                <div class="time">${timeOpenProcessor(property)}</div>
                <div class="address">${property.Address}</div>
                <div class="features">
                     <div>
                        <i aria-hidden="true" class="fa fa-star fa-lg star" title="size"></i>
                        <span class="fa-sr-only">size</span>
                        <span>${property.rating ? `Rating: ${generateStars(property.rating)} | ${property.rating}` : 'No rating available'} (${property.reviews})</span>
                    </div>
                    <div>
                        <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
                        <span class="fa-sr-only">bedroom</span>
                        <span>${property.subcategory}</span>
                    </div>

                </div>
                <div id="${property.Nama}-website">
                    ${property.Website ? `
                    <div>
                        <a href="${property.Website}" target="_blank">Website</a>               
                    </div>` : ''} 
                </div>

            </div>
        </div>

    `;
    return content;
}
function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
function hideMarkers() {
    setMapOnAll(null);
}
function deleteMarkers() {
    console.log(markers)
    hideMarkers();
    markers = [];
}
function toggleHighlight(markerView, property) {
    markers.forEach(view => {
        if (view.name != markerView.name) {
            const otherInnerDiv = view.content.querySelector('.details-container');
            const otherIconDiv = view.content.querySelector('.icon');
            const otherInstaDiv = view.content.querySelector('.insta-container');
            view.content.classList.remove("highlight");
            view.zIndex = null;
            otherInnerDiv.style.opacity = 0;
            if (otherIconDiv.classList.contains("active")) {
                otherIconDiv.style.opacity = 1;
            } else if (otherInstaDiv.classList.contains("active")) {
                otherInstaDiv.style.opacity = 1;
            } else {
                otherIconDiv.style.opacity = 1;
            }
        }
    });
    const innerDiv = markerView.content.querySelector('.details-container');
    const iconDiv = markerView.content.querySelector('.icon');
    const instaDiv = markerView.content.querySelector('.insta-container')
    //console.log(innerDiv)
    if (markerView.content.classList.contains("highlight")) {
        markerView.content.classList.remove("highlight");
        markerView.zIndex = null;
        innerDiv.style.opacity = 0;
        if (iconDiv.classList.contains("active")) {
            iconDiv.style.opacity = 1;
        } else if (instaDiv.classList.contains("active")) {
            instaDiv.style.opacity = 1;
        } else {
            iconDiv.style.opacity = 1;
        }

    } else {
        markerView.content.classList.add("highlight");
        markerView.zIndex = 100;
        innerDiv.style.opacity = 1;
        if (iconDiv.classList.contains("active")) {
            iconDiv.style.opacity = 0;
        } else if (instaDiv.classList.contains("active")) {
            instaDiv.style.opacity = 0;
        } else {
            iconDiv.style.opacity = 0;
        }

    }
}
function toggleInstragram() {
    instaCheck = !instaCheck;
    markers.forEach(view => {
        const instaDiv = view.content.querySelector('.insta-container');
        const iconDiv = view.content.querySelector('.icon');
        if (iconDiv.classList.contains("active")) {
            iconDiv.classList.remove("active");
            instaDiv.classList.add("active");
            instaDiv.style.opacity = 1;
            iconDiv.style.opacity = 0;

        } else {
            instaDiv.classList.remove("active");
            iconDiv.classList.add("active");
            instaDiv.style.opacity = 0;
            iconDiv.style.opacity = 1;
        }
    })
}
function generateStars(rating) {
    const fullStar = '<span class="gold-star">★</span>';
    const emptyStar = '<span>☆</span>';
    let stars = '';

    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? fullStar : emptyStar;
    }

    return stars;
}
function onDateChange() {
    return filterMarkers(markers); //Because onchange is nuts
}
function filterMarkers(markers) {
    console.log("Called")
    markers.forEach(marker => {
        const rating = marker.rating;
        const openingHours = marker.openingHours;

        let showMarker = true;
        // Filter by rating (This is tdumb but it works)
        if (ratingFilterNumber > 0 && rating < ratingFilterNumber) {
            showMarker = false;
        }

        if (ratingFilterNumber > 0 && !rating) {
            showMarker = false;
        }

        if (openingHoursFilter !== "Anytime") {
            const now = new Date();
            const day = now.getDay(); // 0 (Sunday) to 6 (Saturday)
            const time = now.getHours() * 60 + now.getMinutes(); // Minutes since midnight

            if (marker.openingHours != null) {
                if (openingHoursFilter === "Now") {
                    if (marker.allDay == true) {
                        showMarker = true;
                    } else {
                        const d = new Date();
                        const day = d.getDay();
                        // console.log(day)
                        switch (day) {
                            case 1:
                                if (marker.openingHours.Mon > d.getHours() || marker.closingHours.Mon < d.getHours()) {

                                    showMarker = false;
                                }
                                break;
                            case 2:
                                if (marker.openingHours.Tue > d.getHours() || marker.closingHours.Tue < d.getHours()) {
                                    showMarker = false;
                                }
                                break;
                            case 3:
                                if (marker.openingHours.Wed > d.getHours() || marker.closingHours.Wed < d.getHours()) {
                                    showMarker = false;
                                }
                                break;
                            case 4:
                                if (marker.openingHours.Thu > d.getHours() || marker.closingHours.Thu < d.getHours()) {
                                    showMarker = false;
                                }
                                break;
                            case 5:
                                if (marker.openingHours.Fri > d.getHours() || marker.closingHours.Fri < d.getHours()) {
                                    // console.log("Current Time: ", d.getHours(), " Opening Times: ", marker.openingHours.Fri, " Closing Hours: ", marker.openingHours.Fri)

                                    showMarker = false;
                                }
                                break;
                            case 6:
                                if (marker.openingHours.Sat > d.getHours() || marker.closingHours.Sat < d.getHours()) {
                                    showMarker = false;
                                }
                                break;
                            case 0:
                                if (marker.openingHours.Sun > d.getHours() || marker.closingHours.Sun < d.getHours()) {
                                    showMarker = false;
                                }
                                break;
                            default:
                                showMarker = false;
                        }
                    }


                } else if (openingHoursFilter === "24 Hours") {
                    if (!marker.allDay) {
                        showMarker = false;
                    }

                } else {
                }
                if (openingHoursFilter == "specificTime") {
                    const specificDay = document.getElementById("daySelect").value;
                    const specificOpeningTime = document.getElementById("openingTimeInput").value;
                    const specificClosingTime = document.getElementById("closingTimeInput").value;
                    if (marker.allDay) {
                        showMarker = true;
                    } else {
                        switch (specificDay) {
                            case "Monday":
                                if (marker.openingHours.Mon < specificOpeningTime || marker.closingHours.Mon > specificClosingTime) {
                                    console.log("Checking for Opening Hours after:", specificOpeningTime, " and Closing Hours before:", specificClosingTime, "on Monday")
                                    showMarker = false;
                                }
                                break;
                            case "Tuesday":
                                if (marker.openingHours.Tue < specificOpeningTime || marker.closingHours.Tue > specificClosingTime) {
                                    console.log("Checking for Opening Hours after:", specificOpeningTime, " and Closing Hours before:", specificClosingTime, "on Tuesday")
                                    showMarker = false;
                                }
                                break;
                            case "Wednesday":
                                if (marker.openingHours.Wed < specificOpeningTime || marker.closingHours.Wed > specificClosingTime) {
                                    console.log("Checking for Opening Hours after:", specificOpeningTime, " and Closing Hours before:", specificClosingTime, "on Wednesday")
                                    showMarker = false;
                                }
                                break;
                            case "Thursday":
                                if (marker.openingHours.Thu < specificOpeningTime || marker.closingHours.Thu > specificClosingTime) {
                                    console.log("Checking for Opening Hours after:", specificOpeningTime, " and Closing Hours before:", specificClosingTime, "on Thursday")
                                    showMarker = false;
                                }
                                break;
                            case "Friday":
                                if (marker.openingHours.Fri < specificOpeningTime || marker.closingHours.Fri > specificClosingTime) {
                                    console.log("Checking for Opening Hours after:", specificOpeningTime, " and Closing Hours before:", specificClosingTime, "on Friday")

                                    showMarker = false;
                                }
                                break;
                            case "Saturday":
                                if (marker.openingHours.Sat < specificOpeningTime || marker.closingHours.Sat > specificClosingTime) {
                                    console.log("Checking for Opening Hours after:", specificOpeningTime, " and Closing Hours before:", specificClosingTime, "on Saturday")
                                    showMarker = false;
                                }
                                break;
                            case "Sunday":
                                if (marker.openingHours.Sun < specificOpeningTime || marker.closingHours.Sun > specificClosingTime) {
                                    console.log("Checking for Opening Hours after:", specificOpeningTime, " and Closing Hours before:", specificClosingTime, "on Sunday")
                                    showMarker = false;
                                }
                                break;
                            default:
                                showMarker = false;
                        }
                    }

                }
            } else {
                showMarker = false;
            }
        }
        if (showMarker) {
            marker.setMap(map);
        } else {
            marker.setMap(null); //Why is it like this? IDK
        }
    });
}
function convertTimeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}
function typeIconProcessor(type) {
    switch (type) {
        case "Rumah Sakit":
            return "fa-hospital";
        case "klinik medical":
            return "fa-notes-medical";
        case "klinik ibu & anak":
            return "fa-house-chimney-medical";
        case "klinik gigi":
            return "fa-tooth";
        case "Klinik Fisioterapi":
            return "fa-crutch";
        case "Klinik Tumbuh Kembang Anak":
            return "fa-child";
        case "Laboratorium":
            return "fa-flask";
        case "klinik gigi & kecantikan":
            return "fa-bottle-droplet";
        case "Klinik Kulit & Kecantikan":
            return "fa-bottle-droplet";
        case "Basket Ball Court":
            return "fa-basketball";
        case "Club House":
            return "fa-house";
        case "Gym":
            return "fa-dumbbell";;
        case "Pilates Studio":
            return "fa-person-walking";
        case "Stadion":
            return "fa-champagne-glasses";
        case "Swimming Pool":
            return "fa-person-swimming";
        case "Tennis Court":
            return "fa-table-tennis-paddle-ball";
        case "Yoga Studio":
            return "fa-person";
        case "Massage &/ Spa":
            return "fa-spa";
        case "Massage sakit & cedera":
            return "fa-user-injured";
        case "Massage &/ Spa Baby":
            return "fa-spa";
        default:
            return "fa-question";
    }
}
function timeOpenProcessor(place) {
    if (place.allDay == true) {
        return "<span>Open 24 Hours</span>"
    } else {
        const d = new Date();
        const day = d.getDay();
        switch (day) {
            case 1:
                if (place.openingHours.Mon - place.closingHours.Mon == 0) {
                    return `<span>Closed Today</span>`
                } else {
                    return `<span>Open: ${place.openingHours.Mon} AM - ${place.closingHours.Mon > 12 ? place.closingHours.Mon - 12 : place.closingHours.Mon} PM</span>`
                }
            case 2:
                if (place.openingHours.Tue - place.closingHours.Tue == 0) {
                    return `<span>Closed Today</span>`
                } else {
                    return `<span>Open: ${place.openingHours.Tue} AM - ${place.closingHours.Tue > 12 ? place.closingHours.Tue - 12 : place.closingHours.Tue} PM</span>`
                }
            case 3:
                if (place.openingHours.Wed - place.closingHours.Wed == 0) {
                    return `<span>Closed Today</span>`
                } else {
                    return `<span>Open: ${place.openingHours.Wed} AM - ${place.closingHours.Wed > 12 ? place.closingHours.Wed - 12 : place.closingHours.Wed} PM</span>`
                }
            case 4:
                if (place.openingHours.Thu - place.closingHours.Thu == 0) {
                    return `<span>Closed Today</span>`
                } else {
                    return `<span>Open: ${place.openingHours.Thu} AM - ${place.closingHours.Thu > 12 ? place.closingHours.Thu - 12 : place.closingHours.Thu} PM</span>`
                }
            case 5:
                if (place.openingHours.Fri - place.closingHours.Fri == 0) {
                    return `<span>Closed Today</span>`
                } else {
                    return `<span>Open: ${place.openingHours.Fri} AM - ${place.closingHours.Fri > 12 ? place.closingHours.Fri - 12 : place.closingHours.Fri} PM</span>`
                }
            case 6:
                if (place.openingHours.Sat - place.closingHours.Sat == 0) {
                    return `<span>Closed Today</span>`
                } else {
                    return `<span>Open: ${place.openingHours.Sat} AM - ${place.closingHours.Sat > 12 ? place.closingHours.Sat - 12 : place.closingHours.Sat} PM</span>`
                }
            case 0:
                if (place.openingHours.Sun - place.openingHours.Sun == 0) {
                    return `<span>Closed Today</span>`
                } else {
                    return `<span>Open: ${place.openingHours.Sun} AM - ${place.closingHours.Sun > 12 ? place.closingHours.Sun - 12 : place.closingHours.Sun} PM</span>`
                }
            default:
                return "<span>Not Available</span>"
        }
    }
}
loadGoogleMapsAPI('AIzaSyAtq0oi6PV5zq_GXKDx-A_BnOfEfVTBJXk', 'initMap');
window.initMap = initMap;

const checkElementsAndSetupListeners = () => {
    const ratingRange = document.getElementById("ratingRange");
    const anytimeOptionButton = document.getElementById("anytimeOptionButton");
    const nowOptionButton = document.getElementById("nowOptionButton");
    const hours24OptionButton = document.getElementById("hours24OptionButton");
    const specificDayOptionButton = document.getElementById("specificDayOptionButton");
    const specificTimeCheck = document.getElementById("daySelect");
    const specificOpeningTime = document.getElementById("openingTimeInput");
    const specificClosingTime = document.getElementById("closingTimeInput");

    if (ratingRange && anytimeOptionButton && nowOptionButton && hours24OptionButton && specificDayOptionButton && specificTimeCheck && specificOpeningTime && specificClosingTime) {
        // Set up event listeners
        ratingRange.addEventListener("input", () => {
            document.getElementById("result").textContent = ratingRange.value;
            ratingFilterNumber = ratingRange.value;
            filterMarkers(markers, ratingFilterNumber);
        });

        anytimeOptionButton.addEventListener("click", () => {
            openingHoursFilter = "Anytime";
            filterMarkers(markers);
        });

        nowOptionButton.addEventListener("click", () => {
            openingHoursFilter = "Now";
            filterMarkers(markers);
        });

        hours24OptionButton.addEventListener("click", () => {
            openingHoursFilter = "24 Hours";
            filterMarkers(markers);
        });

        specificDayOptionButton.addEventListener("click", () => {
            openingHoursFilter = "specificTime";
            filterMarkers(markers);
        });

        specificTimeCheck.addEventListener("change", () => {
            openingHoursFilter = "specificTime";
            console.log(openingHoursFilter);

            if (specificTimeCheck.disabled) {
                specificDayCheck = false;
            } else {
                specificDayCheck = true;
                filterMarkers(markers);
            }
        });

        specificOpeningTime.addEventListener("change", () => {
            filterMarkers(markers);
        });

        specificClosingTime.addEventListener("change", () => {
            filterMarkers(markers);
        });

        // Clear the interval once the listeners are set up
        clearInterval(intervalId);
    }
};

// Check every second if the elements are available
const intervalId = setInterval(checkElementsAndSetupListeners, 1000);

