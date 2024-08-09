import detailsMedical from "./detailsMedical.js";
import detailsBeauty from "./detailsBeauty.js";
import detailsWellness from "./detailsWellness.js";

let subcategories = [];

for (let i = 0; i < detailsMedical.info.length; i++) {
  console.log(detailsMedical.info[i].subcategory);
  if (!subcategories.includes(detailsMedical.info[i].subcategory)) {
    subcategories.push(detailsMedical.info[i].subcategory);
  }
}

for (let i = 0; i < detailsBeauty.info.length; i++) {
  console.log(detailsBeauty.info[i].subcategory);
    if (!subcategories.includes(detailsBeauty.info[i].subcategory)) {
        subcategories.push(detailsBeauty.info[i].subcategory);
    }
}

for (let i = 0; i < detailsWellness.info.length; i++) {
    console.log(detailsWellness.info[i].subcategory);
    if (!subcategories.includes(detailsWellness.info[i].subcategory)) {
        subcategories.push(detailsWellness.info[i].subcategory);
    }
}

console.log("//////////////")
console.log(subcategories)