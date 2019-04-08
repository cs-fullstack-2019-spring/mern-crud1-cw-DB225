import React, { Component } from 'react';

class NewProduct extends Component{

    submitAllData=(e)=>{
        // console.log(e);
        e.preventDefault();
        fetch('/add',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product_id: e.target.product_id.value,
                    product_price: e.target.product_price.value,
                    product_quantity: e.target.product_quantity.value,
                }),
            }

        )
    };

    render(){
        return(
            <div>
                <form onSubmit={this.submitAllData}>
                    <p>
                    <label htmlFor='product_id'>Product ID: </label>
                    <input type="text" id='product_id' name='product_id'/>
                    </p>

                    <p>
                    <label htmlFor='product_price'>Price: </label>
                    <input type="text" id='product_price' name='product_price'/>
                    </p>

                    <p>
                    <label htmlFor='product_quantity'>Quantity: </label>
                    <input type="text" id='product_quantity' name='product_quantity'/>
                    </p>

                    <p>
                        <input type="submit" value='SEND'/>
                    </p>
                </form>
            </div>
        );
    }
}

export default NewProduct;