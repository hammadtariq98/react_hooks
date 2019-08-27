import React from 'react';


class Search extends React.Component {
    state = {
        searchFoods: [],
    }
    componentDidMount() {
      // var {searchFoods} = this.props.location.state
      // searchFoods.forEach((meal,index) => {
      //   for(var i = 1; i <= 20; i++) {
      //     if (meal["strIngredient" + i] != "")
      //       return(
      //         <li key={index}>{searchFoods["strIngredient" + i]}</li>
      //       )                 
      //   }
      // })
    }
    list(meal) {
      let ingredients = []
      for (var i = 1; i <= 20; i++) {
        if (meal["strIngredient" + i]) {
          ingredients.push(<li key={i}>{meal["strIngredient" + i]}</li>)
        }
      }  
      return ingredients
    }
    render() {
      console.log( "searchFoods",this.list(this.props.location.state.searchFoods[0]));
        if (this.props.location.state.searchFoods) {
          return (
            <section className="container">
              <div className="food-conatainer">
                {this.props.location.state.searchFoods.length > 0 &&
                  this.props.location.state.searchFoods.map(
                    (searchFoods, index) => {
                      return (
                        <div
                          className="food-card"
                          key={index}
                        >
                          <span>Item #{index + 1}</span>
                          <p className="category">
                            {searchFoods.strMeal}
                          </p>
                          <figure>
                            <img
                              src={
                                searchFoods.strMealThumb
                              }
                              alt="food-pic"
                            />
                          </figure>
                          <h4>Food Ingridiants</h4>
                          <ul className="description">
                            { this.list(searchFoods)}
                          </ul>
                          <button>Add to Cart</button>
                        </div>
                      );
                    }
                  )}
              </div>
            </section>
          );
        }else{
            return (
                <section className="container">
                   <p className="erorr">Nothing to Found !</p>
                </section>
            );
        }
    }
}
export default Search;