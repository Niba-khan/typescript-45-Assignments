"use strict";
//
Object.defineProperty(exports, "__esModule", { value: true });
//___CREATING A FUNXCTION WITH PARAMETER_____
function city_country(city, country) {
    return `${city}, ${country}`;
}
//___CALLING A FUNCTION AND PRINT THE RETURNED VALUE__
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("istambol", "Turkey"));
console.log(city_country("Tokyo", "Japan"));
