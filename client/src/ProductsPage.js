import React, { Component } from 'react';
import NewProduct from "./NewProduct";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ListOfProducts from "./ListOfProducts";

class ProductsPage extends Component{
    constructor(props){
        super(props);
        this.state={
            product: [],
        };
        this.productsFunc();
    }

    productsFunc(){
        fetch('/products')
            .then(product=> product.json())
            .then(productsCollection=>this.setState({product:productsCollection}))
    }

    render(){
        return(
            <div>
                <Router>
                    <Link to="/add">Add Product</Link>
                    <Route path='/add' component={NewProduct}/>
                    <h1>Products List</h1>
                    <ListOfProducts list={this.state.product} />
                </Router>
            </div>
        );
    }
}

export default ProductsPage;