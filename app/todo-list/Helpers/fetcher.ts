import { Dispatch, SetStateAction } from 'react';
import { randomNumber } from '../Helpers/randomNumber';

const fetchDataFromAPI = (setItem: Dispatch<SetStateAction<string>>) => {

    // I looked up how many Pokémon there are on the pokéapi,
    // which I then use as a parameter in my random function
    // to encompass all pokémon, but also not more than that.
    const random = randomNumber(1010);

    // I chose to allow the user to easily switch out the url,
    // without having to touch the actual fetch function.
    // The user can also change the parameter to fit their needs.
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`

    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Since the pokéapi returns names in lowercase,
            // I decided to capitalize the first letter.
            const capitalizedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            setItem(capitalizedName)
        })
}

export default fetchDataFromAPI;