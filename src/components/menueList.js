import React , {useState,useEffect} from 'react';
import {fetchData} from "../apis"
import {useSelector} from 'react-redux';


function MenuList(props) {

    const [mount , setMount] = useState(true)
    const [menuList, setMenuList] = useState([])

    const todo = useSelector((state)=> state)
    console.log("todo",todo)


    useEffect(() => {
        if(mount) {
            fetch()
        }
        return (
            setMount(false)
        )

    },menuList)

    async function fetch (){
        const list = await fetchData(props.match.params.name)
        // const list = Data.json()
        setMenuList(list)
    }


    const goBack = () => {
        console.log("click")
        props.history.push("/home")
    }

    if (menuList) {
        return (
            <section className="container">
                <div className="food-conatainer">
                    <h2 className="heading">{props.match.params.name}</h2>
                    {menuList.length > 0 &&
                    menuList.map(
                        (dish, index) => {
                            return (
                                <div
                                    className="food-card"
                                    key={index}
                                >
                                    <span>Dish #{index + 1}</span>
                                    <p className="category">
                                        {dish.strMeal}
                                    </p>
                                    <figure>
                                        <img
                                            src={
                                                dish.strMealThumb
                                            }
                                            alt="food-pic"
                                        />
                                    </figure>
                                    <button onClick={goBack}>Add to Cart</button>
                                </div>
                            );
                        }
                    )}
                </div>
            </section>
        );
    } else {
        return (
            <section className="container">
                <p className="erorr">Nothing to Found !</p>
            </section>
        );
    }
}
export default MenuList;
