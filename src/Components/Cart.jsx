import { useSelector, useDispatch } from 'react-redux'
import { clearCart, selectCartItem } from '../redux/cartSlice/cartSlice'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem);

  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  };

  return (
    <>
      <ToastContainer />
      <div style={myStyle}>

        <div className="container my-4">
          {cartItem.length === 0 ? (
            <div className="text-center my-5">
              <h1>Your Cart is Empty :(</h1>
              <Link to="/" className="btn btn-dark my-3" style={{ fontSize: "15px" }}>
                Continue Shopping...
              </Link>
            </div>
          ) : (
            <div className="row justify-content-center">

              {cartItem.map((item) => (

                <div key={item.id} className="col-12 col-md-10 col-lg-8 my-3">

                  <div className="card mb-3">
                    <div className="row g-0">

                      <div className="col-md-4 d-flex justify-content-center align-items-center p-3">
                        <img src={item.imgSrc} className="img-fluid rounded-start" alt={item.title}/>
                      </div>

                      <div className="col-md-8">
                        <div className="card-body text-center my-3">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.description}</p>

                          <div className="d-flex justify-content-center align-items-center gap-3 my-4">
                            <button className="btn btn-dark">{item.price} ₹</button>
                            <button className="btn btn-primary">BUY NOW</button>
                            <button className="btn btn-danger">Remove</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItem.length !== 0 && (
            <div className="container text-center my-5 d-flex justify-content-center gap-3">
              <div className="btn btn-dark">Check Out</div>
              <div
                onClick={() => {
                  dispatch(clearCart());
                  toast.success('Cart Cleared!', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
                className="btn btn-danger" >Clear All</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

