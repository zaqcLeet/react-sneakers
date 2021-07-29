import styles from "./Header.module.scss";

function Header(props) {
  return (
    <header
      className={`${
        styles.header
      } ${"d-flex justify-between align-center p-40"}`}
    >
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="Logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p d-flex">
          <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
          <span>1 205 руб.</span>
        </li>
        <li className="d-flex">
          <img
            className="cu-p"
            width={18}
            height={18}
            src="/img/user.svg"
            alt="User"
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
