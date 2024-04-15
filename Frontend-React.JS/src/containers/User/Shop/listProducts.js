import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from "../../../components/Product/Product";
import {getListProducts} from "../../../services/productService";

class ListProduct extends Component {

    constructor(props){
        super(props);
        this.state = {
            listProducts:[]

        }

    }

    async componentDidMount() {
        let response = await getListProducts();
        console.log("dhdfuy"+response)
        if (response && response.errCode === 0) {
            this.setState({
                listProducts : response.listProducts
            })
        }
    }
    render() {
        return (<>
            {this.state.listProducts && this.state.listProducts.map((item, index)=>{
              return(
                  <Product key={index} product={item}/>
              )
          })}</>
        )
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
