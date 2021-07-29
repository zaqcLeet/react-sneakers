import React from "react";
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://6101e40b27d22500174b2252.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://6101e40b27d22500174b2252.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const addToCart = (item) => {
    axios.post("https://6101e40b27d22500174b2252.mockapi.io/cart", item);
    setCartItems((prev) => [...prev, item]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6101e40b27d22500174b2252.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddFavorite = (item) => {
    axios.post("https://6101e40b27d22500174b2252.mockapi.io/favorites", item);
    setFavorites((prev) => [...prev, item]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Поиск по запросу: «${searchValue}»`
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
              maxLength={100}
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                src="/img/remove-input.svg"
                className="remove-btn-input cu-p"
                alt=""
              />
            )}
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => (
              <Card
                key={index}
                title={obj.name}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite={(item) => onAddFavorite(item)}
                onPlus={(item) => addToCart(item)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
