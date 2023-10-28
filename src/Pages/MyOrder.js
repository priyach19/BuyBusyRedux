import { useEffect, useState } from "react";
// redux tool for getting data from store
import { useSelector } from "react-redux";
// state of Product Reducer
import { productSelector } from "../Redux/Reducers/productReducer";
import { Link } from "react-router-dom";
import OrderDetail from "../Components/MyOrders/OrderDetail";
import Loader from "../Components/Loader/Loader";
import styles from "../styles/myorder.module.css";

// render my order page
export default function MyOrder() {
  // getting all order's from Product Reducer
  const { myorders } = useSelector(productSelector);

  // to show/hide loading spinner on the page
  const [isLoading, setLoading] = useState(true);

  // hide the spinner after 3seconds time
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    // conditions to show/hide spinner
    <>
      {isLoading ? (
        <Loader />
      ) : (
        // main page container
        <div className={styles.mainContainer}>
          {/* page heading */}
          <h1 className={styles.orderHeading}>My Orders</h1>

          {/* to show message if no order in list */}
          {myorders.length === 0 ? (
            <>
              {/* message of no order */}
              <h1>You haven't placed any order yet !!</h1>
              {/* link to redirect to home page */}
              <Link to="/">!!! Start Shopping !!!</Link>
            </>
          ) : (
            // if contains order than render them one by one
            // order list container
            <div className={styles.orderListContainer}>
              {myorders.map((order, i) => (
                <OrderDetail key={i} order={order} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
