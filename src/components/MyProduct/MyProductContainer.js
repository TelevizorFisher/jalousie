import { connect } from "react-redux";
import MyProduct from "./MyProduct";

let mapStateToProps = (state) => {
  return {
    product: state.product.product,
  };
};

const MyProductContainer = connect(mapStateToProps)(MyProduct);

export default MyProductContainer;
