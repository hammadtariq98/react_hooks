import React , {useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function NavBar(){
    // state = {
    //     foods: []
    // }

     const [foods,setFoods] = useState([])

     useEffect(() => {
         axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
             .then(respo => {
                 setFoods(respo.data.categories)
             })
             .catch(err => console.log(err))
     })

        if (foods) {
            return (
                <section className="container">
                    <div className="food-conatainer">
                        <h2 className="heading">CATEGORY MENUE</h2>
                        {foods.map((food, index) => {
                            return (
                                <div className="food-card" key={index}>
                                    <span>Category #{food.idCategory}</span>
                                    <p className="category">{food.strCategory} </p>
                                    <figure>
                                        <img src={food.strCategoryThumb} alt="food-pic" />
                                    </figure>
                                    <h4>Food Description</h4>
                                    <p className="description">{food.strCategoryDescription}</p>
                                    <Link to={{ pathname: '/MenueList/' + food.strCategory, state: foods }} ><button>View Menue</button></Link>
                                </div>
                            );
                        })}
                    </div>
                </section>
            );
        }
   }
export default NavBar;
