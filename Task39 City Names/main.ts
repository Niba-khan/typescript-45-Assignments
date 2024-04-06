/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/


//___CREATING A FUNXCTION WITH PARAMETER_____

function city_country (city: string, country: string) : string{
    return `${city}, ${country}`
}
      
//___CALLING A FUNCTION AND PRINT THE RETURNED VALUE__
 console.log(city_country("Karachi", "Pakistan"));

 console.log(city_country("istambol", "Turkey"));

 console.log(city_country("Tokyo", "Japan"));