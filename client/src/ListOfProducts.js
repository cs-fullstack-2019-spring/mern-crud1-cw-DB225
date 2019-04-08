import React, { Component } from 'react';

class ListOfProducts extends Component{
    deleteProduct=(e)=>{
        fetch('/delete',
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product_id: e.target.product_id,
                }),
            }
        );
    };

    render(){
        const completeList = this.props.list.map((eachProd) =>{
            return(
                <div>
                    <h1>ID: {eachProd.product_id}</h1>
                    <h2>{eachProd.product_price}</h2>
                    <h4>Quantity: {eachProd.product_quantity}</h4>
                    <p>
                        <a href="#" product_id={eachProd.product_id} onClick={this.deleteProduct}>Delete</a>
                    </p>
                    <hr/>
                </div>
            )
        });
        return(
            <div>
                {completeList}
            </div>
        );
    }
}

export default ListOfProducts;