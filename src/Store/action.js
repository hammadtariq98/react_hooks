import axios from "axios";


export const latestFoods = () => {
    return dispatch=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/latest.php").then(res=>{
            dispatch(onSuccess((res.data.meals)))
        })
    }
}

const onSuccess=(data)=>{
    return{
        type:"LATEST_FOODS",
        payload:data
    }
}
