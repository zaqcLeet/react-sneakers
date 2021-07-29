import styles from "./Drawer.module.scss";

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={`${styles.drawer} ${"d-flex flex-column"}`}>
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            onClick={onClose}
            className={`${styles.removeBtn} ${"cu-p"}`}
            src="/img/remove-checked.svg"
            alt="Remove Button"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className={`${styles.items} ${"flex"}`}>
              {items.map((obj) => (
                <div
                  className={`${
                    styles.cartItem
                  } ${"d-flex align-center mb-20"}`}
                >
                  <img
                    className="mr-20"
                    width={70}
                    height={70}
                    src={`${obj.imageUrl}`}
                    alt="Sneakers"
                  />
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className={styles.removeBtn}
                    src="/img/remove-checked.svg"
                    alt="Remove Button"
                  />
                </div>
              ))}
            </div>

            <div className={styles.cartTotalBlock}>
              <ul>
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>12312 руб. </b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1 074 руб. </b>
                </li>
              </ul>

              <button className={styles.greenButton}>
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              src="/img/empty-cart.png"
              alt="Empty Cart"
              width={120}
              height={120}
            />
            <h2>Корзина пустая</h2>
            <p className="mb-40">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button
              onClick={onClose}
              className={`${
                styles.greenButtonBack
              } ${"d-flex align-center justify-center"}`}
            >
              <img src="/img/arrow-reverse.svg" alt="Arrow" /> Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
