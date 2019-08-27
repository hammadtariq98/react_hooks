import React , {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {latestFoods} from './../Store/action'
import {LATEST_FOODS} from "./../Store/types";
import {useDispatch} from "react-redux";
import { connect } from 'react-redux';
/**
 * @return {string}
 */
function  Home () {

    const [latestFood, setLatestFoods] = useState([])

    const foods = useSelector( (state) => state )

    const dispatch =useDispatch()

    useEffect(() => {
       dispatch(latestFoods())
    },[])

    console.log(foods)

    if (foods) {
        return (
            foods.latestFoods.length >= 0 ?
                <section className="container">
                    <div className="food-conatainer">
                        <h2 className="heading">LATEST DISHIES</h2>
                        {foods.latestFoods.map((latestFoods, index) => {
                            return (
                                <div className="food-card" key={index}>
                                    <span>Item #{index + 1}</span>
                                    <p className="category">
                                        {latestFoods.strMeal}
                                    </p>
                                    <figure>
                                        <img
                                            src={latestFoods.strMealThumb}
                                            alt="food-pic"
                                        />
                                    </figure>
                                    <button>Add to Cart</button>
                                </div>
                            );
                        })}
                    </div>
                </section>
                : ""
        );
    }else {
        return "Loading"
    }


   }

export default Home;
