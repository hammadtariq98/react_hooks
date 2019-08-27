import React , { useState } from 'react';
import Menu, {Item as MenuItem} from 'rc-menu';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';


import {fetchData} from "../apis"


function Header(props) {

   const  [searchValue  , setSearchValue] = useState("")
  const handelInput = (value) => {
      setSearchValue(value)
  };
  const onSelect = ({ key }) => {
    handelInput(key);
  };

  const onVisibleChange = visible => {
  };

  const menu = (
    <Menu onSelect={onSelect}>
      <MenuItem key="Lamb">Lamb</MenuItem>
      <MenuItem key="Chicken">Chicken</MenuItem>
      <MenuItem key="Beef">Beef</MenuItem>
      <MenuItem key="Desert">Desert</MenuItem>
      <MenuItem key="Seafood">Seafood</MenuItem>
      <MenuItem key="Pasta">Pasta</MenuItem>
      <MenuItem key="Miscellaneous">Miscellaneous</MenuItem>
      <MenuItem key="Pork">Pork</MenuItem>
      <MenuItem key="Vegan">Vegan</MenuItem>
      <MenuItem key="Starter">Starter</MenuItem>
      <MenuItem key="Vegetarian">Vegetarian</MenuItem>
    </Menu>
  );

  const handleGo = async () => {
    let searchFoods = await fetchData(searchValue);
    props.history.push("/search/" + searchValue, {searchFoods});
    setSearchValue("");
  };

    return (
      <header>
        <div className="container">
          <div className="header">
            <figure>
              <img
                src={require("./../assats/images/food-logo.png")}
                alt="food-logo"
              />
            </figure>
            <section className="left-section">
              <div className="search">
                <Dropdown
                  trigger={["click"]}
                  overlay={menu}
                  animation="slide-up"
                  onVisibleChange={onVisibleChange}
                >
                  <input
                    type="text"
                    placeholder="Select Category"
                    value={searchValue}
                    onChange={handelInput}
                  />
                </Dropdown>
                <button onClick={handleGo}>Go</button>
              </div>
              <div className="registered">
                <button>Sign Up</button>
                <span>Or</span>
                <button>Log In</button>
              </div>
              <div className="cart">
                <figure>
                  <img
                    src={require("./../assats/images/download.jpg")}
                    alt="food-logo"
                  />
                </figure>
                <div>
                  <p>Your Cart</p>
                  <p>Items: $0000</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </header>
    );
}

export default Header;
