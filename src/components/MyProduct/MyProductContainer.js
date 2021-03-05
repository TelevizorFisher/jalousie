
import MyProduct from "./MyProduct";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
	product: state.product.product,
  };
};
const MyProductContainer = connect(mapStateToProps)(MyProduct);

export default MyProductContainer;
