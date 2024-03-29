import React, {Component} from 'react'
import Order from  "../../../componenents/Burger/ordersummary/order/order"
import axios from "../../../axios-orders"
import withErrorHandler from "../../../componenents/UI/withErrorhandler/withErrorhandler"
import * as actions from "../../../store/actions/index"
import { connect } from "react-redux";
import Spinner from "../../../componenents/UI/spinner/spinner"
class Orders extends Component {


    componentDidMount() {

        this.props.onFetchOrders();
       
            
    }

    render () {
        let orders = <Spinner />;
        if ( !this.props.loading ) {
            orders = this.props.orders.map( order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ) )
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        loading: state.orders.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch( actions.fetchOrders() )
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(Orders, axios));