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
    const centerControlDiv = document.createElement("div");
    const centerControl = createCenterControl(map);
    centerControlDiv.classList.add("px-2");
    centerControlDiv.appendChild(centerControl);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);
}
function createCenterControl(map) {
    const controlDiv = document.createElement("div");
    controlDiv.classList.add("px-2");
    controlDiv.classList.add("flex-row")
    controlDiv.classList.add("d-flex")


    const controlButton = document.createElement("button");
    controlButton.classList.add("px-2");
    controlButton.style.backgroundColor = "#fff";
    controlButton.style.border = "2px solid #fff";
    controlButton.style.borderRadius = "3px";
    controlButton.style.color = "rgb(25,25,25)";
    controlButton.style.cursor = "pointer";
    controlButton.style.fontFamily = "Roboto,Arial,sans-serif";
    controlButton.style.fontSize = "16px";
    controlButton.style.lineHeight = "12px";
    controlButton.style.margin = "8px 0 22px";
    controlButton.style.padding = "0 5px";
    controlButton.style.textAlign = "center";
    controlButton.textContent = "Find Place";
    controlButton.title = "Click to find places";
    controlButton.type = "button";

    //Category Stuff
    const dropdownCategory = document.createElement("div");
    dropdownCategory.id = "Category Dropdown";
    dropdownCategory.classList.add("px-2");
    dropdownCategory.classList.add("flex-column");
    dropdownCategory.classList.add("d-flex")
    dropdownCategory.style.margin = "8px 0 22px";
    dropdownCategory.style.padding = "0 5px";
    dropdownCategory.style.fontSize = "16px";
    dropdownCategory.style.lineHeight = "12px";

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
        button.textContent = option.text;
        button.classList.add("vertical-menu-long")
        button.style.margin = "2.5px auto";
        button.style.padding = "px";
        button.style.fontSize = "16px";
        button.style.cursor = "pointer";

        button.addEventListener("click", () => {
            //findPlace(button.value);
            var targetMenu = document.getElementById(button.value + "Dropdown");
            console.log(targetMenu)
            if (targetMenu.classList.contains("active")) {
                targetMenu.classList.remove("active");
            } else {
                categoryOptions.forEach(option => {
                    var targetMenu = document.getElementById(option.value + "Dropdown");
                    targetMenu.classList.remove("active");
                    targetMenu.style.display = "none";
                });
                targetMenu.classList.add("active");
                targetMenu.style.display = "block";
            }
        });

        dropdownContentCategory.appendChild(button);
    });


    //Subcategory Function 
    const dropdown = document.createElement("div");
    dropdown.id = "Subcategory Dropdown";
    dropdown.classList.add("px-2");
    dropdown.classList.add("flex-column");
    dropdown.classList.add("d-flex")
    dropdown.style.margin = "8px 0 22px";
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
    dropdown.appendChild(dropdownContent);

    const dropdownContent2 = document.createElement("div");
    dropdownContent2.id = "wellnessDropdown";
    dropdownContent2.classList.add("vertical-menu");
    dropdownContent2.style.display = "none";
    dropdown.appendChild(dropdownContent2);


    const dropdownContent3 = document.createElement("div");
    dropdownContent3.id = "beautyDropdown";
    dropdownContent3.classList.add("vertical-menu");
    dropdownContent3.style.display = "none";
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
        button.style.margin = "2.5px auto";
        button.style.fontSize = "14px";
        button.style.cursor = "pointer";

        button.addEventListener("click", () => {
            findPlace(button.value);
        });

        dropdownContent.appendChild(button);
    });

    options2well.forEach(option => {
        const button = document.createElement("button");
        button.value = option.value;
        button.textContent = option.text;
        button.classList.add("vertical-menu-long")
        button.style.margin = "2.5px auto";
        button.style.fontSize = "14px";
        button.style.cursor = "pointer";

        button.addEventListener("click", () => {
            findPlace(button.value);
        });

        dropdownContent2.appendChild(button);
    });

    options3beauty.forEach(option => {
        const button = document.createElement("button");
        button.value = option.value;
        button.textContent = option.text;
        button.classList.add("vertical-menu-long")
        button.style.margin = "2.5px auto";
        button.style.fontSize = "14px";
        button.style.cursor = "pointer";

        button.addEventListener("click", () => {
            findPlace(button.value);
        });

        dropdownContent3.appendChild(button);
    });

    //The Rest
    const moreFiltersContainer = document.createElement("div");
    const moreFilters = document.createElement("div");
    moreFilters.id = "moreFilters";
    moreFilters.classList.add("px-2");
    moreFilters.classList.add("flex-column");
    moreFilters.classList.add("d-flex")
    moreFilters.style.margin = "8px 0 22px";
    moreFilters.style.padding = "0 5px";
    moreFilters.style.fontSize = "16px";
    moreFilters.style.lineHeight = "12px";
    moreFilters.style.position = "relative";

    const moreFiltersButton = document.createElement("button");
    moreFiltersButton.classList.add("dropbtn");
    moreFiltersButton.innerHTML = "More Filters";
    moreFiltersButton.addEventListener("click", () => {
        const lessFilters = document.getElementById("lessFilters");
        const promoFilter = document.getElementById("promoFilter");
        const ratingFilter = document.getElementById("ratingFilter");
        const hourFilter = document.getElementById("hourFilter");

        lessFilters.style.zIndex = "2";
        lessFilters.style.width = "100%";
        lessFilters.style.padding = "0 5px";
        lessFilters.classList.add("px-2");
        promoFilter.style.zIndex = "2";
        promoFilter.style.width = "100%";
        promoFilter.style.padding = "0 5px";
        promoFilter.classList.add("px-2");
        ratingFilter.style.zIndex = "2";
        ratingFilter.style.width = "100%";
        ratingFilter.style.padding = "0 5px";
        ratingFilter.classList.add("px-2");
        hourFilter.style.zIndex = "2";
        hourFilter.style.width = "100%";
        hourFilter.style.padding = "0 5px";
        hourFilter.classList.add("px-2");
        moreFilters.style.zIndex = -1000;
        moreFilters.style.width = "0px";
        moreFilters.style.padding = "0px";
        moreFilters.classList.remove("px-2");
    });

    moreFilters.appendChild(moreFiltersButton);
    moreFiltersContainer.appendChild(moreFilters);

    //Promo
    const promoFilterContainer = document.createElement("div");
    const promoFilter = document.createElement("div");
    promoFilter.id = "promoFilter";
    //promoFilter.classList.add("px-2");
    promoFilter.classList.add("flex-column");
    promoFilter.classList.add("d-flex")
    promoFilter.style.margin = "8px 0 22px";
    // promoFilter.style.padding = "0 5px";
    promoFilter.style.fontSize = "16px";
    promoFilter.style.lineHeight = "12px";
    promoFilter.style.display = "none";
    promoFilter.style.zIndex = -1000;
    promoFilter.style.position = "relative";
    promoFilter.style.width = "0px";

    const PromosButton = document.createElement("button");
    PromosButton.classList.add("dropbtn");
    PromosButton.innerHTML = "Promos";
    promoFilter.appendChild(PromosButton);
    promoFilterContainer.appendChild(promoFilter);

    const PromoDiv = document.createElement("div");
    PromoDiv.classList.add("vertical-menu-long");
    PromoDiv.style.margin = "2.5px auto";
    PromoDiv.style.padding = "10px";
    PromoDiv.style.fontSize = "16px";
    PromoDiv.style.cursor = "pointer";
    PromoDiv.style.display = "none";
    PromoDiv.style.position = "relative";
    PromoDiv.innerHTML = `
        <div class="checkbox-wrapper-1">
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

    //Rating
    const ratingFilterContainer = document.createElement("div");
    const ratingFilter = document.createElement("div");
    ratingFilter.id = "ratingFilter";
    //ratingFilter.classList.add("px-2");
    ratingFilter.classList.add("flex-column");
    ratingFilter.classList.add("d-flex")
    ratingFilter.style.margin = "8px 0 22px";
    // ratingFilter.style.padding = "0 5px";
    ratingFilter.style.fontSize = "16px";
    ratingFilter.style.lineHeight = "12px";
    ratingFilter.style.display = "none";
    ratingFilter.style.zIndex = -1000;
    ratingFilter.style.position = "relative";
    ratingFilter.style.width = "0px";

    const RatingButton = document.createElement("button");
    RatingButton.classList.add("dropbtn");
    RatingButton.innerHTML = "Rating";
    ratingFilter.appendChild(RatingButton);
    ratingFilterContainer.appendChild(ratingFilter);

    const RatingDiv = document.createElement("div");
    RatingDiv.classList.add("vertical-menu-long")
    RatingDiv.style.margin = "2.5px auto";
    RatingDiv.style.padding = "10px";
    RatingDiv.style.fontSize = "16px";
    RatingDiv.style.cursor = "pointer";
    RatingDiv.style.display = "none";
    RatingDiv.style.position = "relative";
    RatingDiv.innerHTML = `
        <div class="slidecontainer">
            <input type="range" min="0" max="5" value="0" class="slider" id="ratingRange">
            <p>Value: <span id="result" >0</span></p>
        </div>`
    ratingFilter.appendChild(RatingDiv);

    RatingButton.addEventListener("click", () => {
        if (RatingDiv.style.display === "none") {
            RatingDiv.style.display = "block";
        } else {
            RatingDiv.style.display = "none";
        }
    });

    //Open Hours
    const hourFilterContainer = document.createElement("div");
    const hourFilter = document.createElement("div");
    hourFilter.id = "hourFilter";
    // hourFilter.classList.add("px-2");
    hourFilter.classList.add("flex-column");
    hourFilter.classList.add("d-flex")
    hourFilter.style.margin = "8px 0 22px";
    // hourFilter.style.padding = "0 5px";
    hourFilter.style.fontSize = "16px";
    hourFilter.style.lineHeight = "12px";
    hourFilter.style.display = "none";
    hourFilter.style.zIndex = -1000;
    hourFilter.style.position = "relative";
    hourFilter.style.width = "0px";

    const hourButton = document.createElement("button");
    hourButton.classList.add("dropbtn");
    hourButton.innerHTML = "Opening Hours";
    hourFilter.appendChild(hourButton);
    hourFilterContainer.appendChild(hourFilter);
    //For specific times
    const openingHourstContainerContainer = document.createElement("div");
    openingHourstContainerContainer.id = "openingHourstContainerContainer";
    openingHourstContainerContainer.style.display = "none";

    const openingHoursContainer = document.createElement("div");
    openingHoursContainer.id = "openingHoursContainer";
    openingHoursContainer.classList.add("flex-column", "d-flex");
    openingHoursContainer.style.margin = "8px 0 22px";
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
    anytimeOption.style.margin = "2.5px auto";
    openingHoursContainer.appendChild(anytimeOption);

    const nowOption = document.createElement("button");
    nowOption.id = "nowOptionButton";
    nowOption.innerHTML = "Now";
    nowOption.classList.add("openingHourSize")
    nowOption.style.margin = "2.5px auto";
    openingHoursContainer.appendChild(nowOption);

    const hours24Option = document.createElement("button");
    hours24Option.id = "hours24OptionButton";
    hours24Option.innerHTML = "24 Hours";
    hours24Option.classList.add("openingHourSize")
    hours24Option.style.margin = "2.5px auto";
    openingHoursContainer.appendChild(hours24Option);

    const specificDayOption = document.createElement("button");
    specificDayOption.id = "specificDayOptionButton";
    specificDayOption.innerHTML = "Specific";
    specificDayOption.classList.add("openingHourSize")
    // openingHoursContainer.appendChild(specificDayOption);


    //the more specific selection
    const specificSelectionContainer = document.createElement("div");
    specificSelectionContainer.classList.add("specific-selection");

    const daySelect = document.createElement("select");
    daySelect.disabled = true;
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    days.forEach(day => {
        const option = document.createElement("option");
        option.value = day;
        option.innerHTML = day;
        daySelect.appendChild(option);
    });
    specificSelectionContainer.appendChild(daySelect);

    const openingTimeInput = document.createElement("input");
    openingTimeInput.disabled = true;
    openingTimeInput.id = "openingTimeInput";
    openingTimeInput.type = "time";
    openingTimeInput.classList.add("openingHourSize")
    specificSelectionContainer.appendChild(openingTimeInput);

    const closingTimeInput = document.createElement("input");
    closingTimeInput.disabled = true;
    closingTimeInput.id = "closingTimeInput";
    closingTimeInput.type = "time";
    closingTimeInput.classList.add("openingHourSize")
    specificSelectionContainer.appendChild(closingTimeInput);

    // openingHoursContainer.appendChild(specificSelectionContainer);
    openingHourstContainerContainer.appendChild(openingHoursContainer);
    hourFilter.appendChild(openingHourstContainerContainer);

    hourButton.addEventListener("click", () => {
        if (openingHourstContainerContainer.style.display === "none") {
            openingHourstContainerContainer.style.display = "block";
        } else {
            openingHourstContainerContainer.style.display = "none";
    }});
    //Social???
    //Less Filter More Filter Button
    const lessFiltersContainer = document.createElement("div");
    const lessFilters = document.createElement("div");
    lessFilters.id = "lessFilters";
    //lessFilters.classList.add("px-2");
    lessFilters.classList.add("flex-column");
    lessFilters.classList.add("d-flex")
    lessFilters.style.margin = "8px 0 22px";
    // lessFilters.style.padding = "0 5px";
    lessFilters.style.fontSize = "16px";
    lessFilters.style.lineHeight = "12px";
    lessFilters.style.display = "none"; //Because intiially they be moreFilters
    lessFilters.style.zIndex = -1000;
    lessFilters.style.position = "relative";
    lessFilters.style.width = "0px";
    const lessFiltersButton = document.createElement("button");
    lessFiltersButton.classList.add("dropbtn");
    lessFiltersButton.innerHTML = "Less Filters";
    lessFiltersButton.addEventListener("click", () => {
        const promoFilter = document.getElementById("promoFilter");
        const ratingFilter = document.getElementById("ratingFilter");
        const hourFilter = document.getElementById("hourFilter");
        const moreFilters = document.getElementById("moreFilters");
        moreFilters.style.zIndex = "2";
        moreFilters.style.width = "100%";
        moreFilters.style.padding = "0 5px";
        moreFilters.classList.add("px-2");
        promoFilter.style.zIndex = -1000;
        promoFilter.style.width = "0px";
        promoFilter.style.padding = "0px";
        promoFilter.classList.remove("px-2");
        ratingFilter.style.zIndex = -1000;
        ratingFilter.style.width = "0px";
        ratingFilter.style.padding = "0px";
        ratingFilter.classList.remove("px-2");
        hourFilter.style.zIndex = -1000;
        hourFilter.style.width = "0px";
        hourFilter.style.padding = "0px";
        hourFilter.classList.remove("px-2");
        lessFilters.style.zIndex = -1000;
        lessFilters.style.width = "0px";
        lessFilters.style.padding = "0px";
        lessFilters.classList.remove("px-2");
    });
    lessFilters.appendChild(lessFiltersButton);
    lessFiltersContainer.appendChild(lessFilters);
    controlDiv.appendChild(dropdownCategory);
    controlDiv.appendChild(dropdown);
    controlDiv.appendChild(moreFiltersContainer);
    controlDiv.appendChild(promoFilterContainer);
    controlDiv.appendChild(ratingFilterContainer);
    controlDiv.appendChild(hourFilterContainer);
    controlDiv.appendChild(lessFiltersContainer);


    return controlDiv;
}
// Function to find places based on the type
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
// async function processResults(type, map, polygon) {
//     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//     for (let i = results.length - 1; i >= 0; i--) {
//         const currentPlace = results[i]
//         console.log(results[i])
//         if (currentPlace.types[0] !== type[0]) {
//             console.log("Type Mismatch: ", currentPlace.types[0], " vs ", type)
//         } else {
//             console.log("Type Match: ", currentPlace.types[0], " vs ", type)
//             if (google.maps.geometry.poly.containsLocation(currentPlace.geometry.location, polygon)) {
//                 const placeId = currentPlace.place_id;
//                 const cachedDetails = localStorage.getItem(placeId); //Fuck it we cache
//                 if (currentPlace.photos && currentPlace.photos.length > 0) {
//                     currentPlace.photoUrl = currentPlace.photos[0].getUrl({ maxWidth: 200, maxHeight: 200 });
//                     //marker.content.style.backgroundImage = `url(${currentPlace.photoUrl})`;
//                 } else {
//                     currentPlace.photoUrl = null;
//                 }
//                 if (cachedDetails) {
//                     console.log("Cache Data present")
//                     const placeDetails = JSON.parse(cachedDetails);
//                     currentPlace.website = placeDetails.website; //THESE TWO, cost the most. 0.020 USD per call! THats like, 1.2 Dollars per click! So DONT use PLACE DETAILS AHHHH
//                     currentPlace.photoUrl = placeDetails.photoUrl;
//                     const marker = new AdvancedMarkerElement({
//                         map: map,
//                         content: buildContent(currentPlace, type),
//                         position: currentPlace.geometry.location
//                     });
//                     marker.addListener("click", () => {
//                         toggleHighlight(marker, currentPlace);
//                     });
//                     marker.rating = currentPlace.rating;
//                     marker.openingHours = currentPlace.opening_hours;
//                     markers.push(marker);
//                 } else {
//                     const marker = new AdvancedMarkerElement({
//                         map: map,
//                         content: buildContent(currentPlace, type),
//                         position: currentPlace.geometry.location
//                     });
//                     marker.addListener("click", async () => {
//                         console.log("Getting Data!")
//                         const choseNamed = currentPlace.name.toLowerCase();
//                         //console.log(choseNamed)
//                         for (i in knownWebsites) {
//                             //console.log(knownWebsites[i][0].toLowerCase())
//                             if (choseNamed == knownWebsites[i][0].toLowerCase()) {
//                                 const websiteContainer = document.getElementById(`${placeId}-website`);
//                                 websiteContainer.innerHTML = `
//                                             <div>
//                                                  <a href="${websiteContainer.website}" target="_blank">Website</a>               
//                                              </div>
//                                          `
//                             }
//                         }
//                         toggleHighlight(marker, currentPlace);
//                     });
//                     marker.rating = currentPlace.rating;
//                     marker.openingHours = currentPlace.opening_hours;
//                     //console.log(currentPlace.opening_hours.isOpen.length)
//                     markers.push(marker);
//                 }
//             }
//         }
//         //currentPlace.moreDetails = new google.maps.places.Place(currentPlace.id);
//     }

//     if (results.length > 0) {
//         //console.log(results.length)
//         // map.setCenter(-6.2926352615305315, 106.64603487500078);
//         map.setZoom(14);
//     }

// }

async function processResultsLocal(type, map) {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    deleteMarkers();
    if( type == "Rumah Sakit"|| type == "klinik medical" || type == "klinik ibu & anak" || type == "klinik gigi" || type == "Klinik Fisioterapi" || type == "Klinik Tumbuh Kembang Anak" || type == "Laboratorium"){ 
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

    if ( type == "Basket Ball Court" || type == "Club House" || type == "Gym" || type == "Pilates Studio" || type == "Stadion" || type == "Swimming Pool" || type == "Tennis Court" || type == "Yoga Studio" || type == "Massage &/ Spa" || type == "Massage sakit & cedera" || type == "Massage &/ Spa Baby") {
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
                    });
                    marker.name = currentPlace.Nama;
                    marker.rating = currentPlace.rating;
                    marker.openingHours = currentPlace.openingHours;
                    marker.closingHours = currentPlace.closingHours;
                    marker.allDay = currentPlace.allDay;
                    marker.IGFollowers = currentPlace.IGFollowers;
                    markers.push(marker);            }
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
                    });                    
                    marker.name = currentPlace.Nama;
                    marker.rating = currentPlace.rating;
                    marker.openingHours = currentPlace.openingHours;
                    marker.closingHours = currentPlace.closingHours;
                    marker.allDay = currentPlace.allDay;
                    marker.IGFollowers = currentPlace.IGFollowers;
                    markers.push(marker);            }
        }
    }

}
function buildContent(property, type) {
    const content = document.createElement("div");
    //console.log(property)
    content.classList.add("property");
    content.classList.add("rounded-3");
    if (property.photoURL) {
        content.style.backgroundImage = `url(${property.photoURL})`;
    } else {
        content.style.backgroundImage = `url("../img/noImage.png")`;

    }
    content.innerHTML = `
        <div class="icon rounded-3">
            <i aria-hidden="true" class="fa fa-icon ${typeIconProcessor(property.subcategory)}" title="${property.Nama}"></i>
            <span class="fa-sr-only">${property.Nama}</span>
        </div>
        <div class="details-container">
            <div class="details">
                <div class="price">${property.Nama}</div>
                <div class="address">${property.Address}</div>
                <div class="features">
                     <div>
                        <i aria-hidden="true" class="fa fa-star fa-lg star" title="size"></i>
                        <span class="fa-sr-only">size</span>
                        <span>${property.rating ? `Rating: ${generateStars(property.rating)} | ${property.rating} Stars` : 'No rating available'}</span>
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
        if(view.name != markerView.name) {
            const otherInnerDiv = view.content.querySelector('.details-container');
            const otherIconDiv =  view.content.querySelector('.icon');
            view.content.classList.remove("highlight");
            view.zIndex = null;
            otherInnerDiv.style.opacity = 0;
            otherIconDiv.style.opacity = 1;
        }
    });
    const innerDiv = markerView.content.querySelector('.details-container');
    const iconDiv = markerView.content.querySelector('.icon');
    //console.log(innerDiv)
    if (markerView.content.classList.contains("highlight")) {
        markerView.content.classList.remove("highlight");
        markerView.zIndex = null;
        innerDiv.style.opacity = 0;
        iconDiv.style.opacity = 1;

    } else {
        markerView.content.classList.add("highlight");
        markerView.zIndex = 100;
        innerDiv.style.opacity = 1;
        iconDiv.style.opacity = 0;

    }
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
function filterMarkers(markers) {
    markers.forEach(marker => {
        const rating = marker.rating;
        const openingHours = marker.openingHours;

        let showMarker = true;
        // Filter by rating (This is tdumb but it works)
        if (ratingFilterNumber > 0 && rating < ratingFilterNumber) {
            showMarker = false;
        }

        if(ratingFilterNumber > 0 && !rating) {
            showMarker = false;
        }

        if (openingHoursFilter !== "Anytime") {
            const now = new Date();
            const day = now.getDay(); // 0 (Sunday) to 6 (Saturday)
            const time = now.getHours() * 60 + now.getMinutes(); // Minutes since midnight

            if(marker.openingHours != null) {
                if (openingHoursFilter === "Now") {
                    if (marker.allDay == true) {
                        showMarker = true;
                    } else {
                        const d = new Date();
                        const day = d.getDay();
                        console.log(day)
                        switch(day) {
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
                                    console.log("Current Time: ", d.getHours(), " Opening Times: ", marker.openingHours.Fri, " Closing Hours: ", marker.openingHours.Fri)
    
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
                    const [filterDay, filterOpeningTime, filterClosingTime] = openingHoursFilter.split(",");
                    const filterDayIndex = days.indexOf(filterDay); //I hate this
                    const filterOpeningMinutes = convertTimeToMinutes(filterOpeningTime);
                    const filterClosingMinutes = convertTimeToMinutes(filterClosingTime);
    
                    if (!isOpenDuringSpecificTime(openingHours, filterDayIndex, filterOpeningMinutes, filterClosingMinutes)) {
                        showMarker = false;
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
            return  "fa-crutch";
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
            return "fa-dumbbell"; ;
        case "Pilates Studio":
            return "fa-person-walking";
        case "Stadion":
            return "fa-champagne-glasses";
        case "Swimming Pool":
            return "fa-person-swimming";
        case "Tennis Court":
            return "fatable-tennis-paddle-ball";
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


loadGoogleMapsAPI('AIzaSyAtq0oi6PV5zq_GXKDx-A_BnOfEfVTBJXk', 'initMap');

//Add KEKA 
window.initMap = initMap;


setTimeout(() => {
    document.getElementById("ratingRange").addEventListener("input", () => {
        document.getElementById("result").textContent = document.getElementById("ratingRange").value;
        ratingFilterNumber = document.getElementById("ratingRange").value;
        filterMarkers(markers, ratingFilterNumber);
    });
    document.getElementById("anytimeOptionButton").addEventListener("click", () => {
        openingHoursFilter = "Anytime";
        filterMarkers(markers);
    });
    document.getElementById("nowOptionButton").addEventListener("click", () => {
        openingHoursFilter = "Now";
        filterMarkers(markers);
    });
    document.getElementById("hours24OptionButton").addEventListener("click", () => {
        openingHoursFilter = "24 Hours";
        filterMarkers(markers);
    });
    // document.getElementById("specificDayOptionButton").addEventListener("click", () => {
    //     openingHoursFilter = "Specific";
    //     filterMarkers(markers);
    // });
}, 7000);

