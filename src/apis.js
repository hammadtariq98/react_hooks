import axios from 'axios';

export function fetchData(location) {
    return new Promise((resolve,reject)=> {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + location).then(respon => {
            if(respon.data) {
                resolve(respon.data.meals)
            }
        });
    })
}
