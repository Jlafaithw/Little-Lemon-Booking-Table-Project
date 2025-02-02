import React from "react";
import recipes from "../recipes";

const Menu = () => {

    const handleOrder = () => {
        console.log(id, "id is clicked");
        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confrimButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            conifirmButtonText: 'Yes, order it!'
          }).then((results) => {
            if (results.isConfirmed) {
                swal.fire(
                    'Ordered!',
                    'Your order has been processing.',
                    'success'
                )
            }
          })
            
         

    }

    return (
        <div className='menu-container'>
         <div className='menu-header'>
            <h2>This weeks specials!</h2>
            <button>Order Menu</button>
         </div>

         {/* menu cards */}
         <div className='cards'>
            {
                 recipes.map(recipes => <div key={recipe.id} className='menu-items'>
                    <img scr={recipe.image} alt=''/>
                    <div className='menu-content'>
                        <div className='heading'>
                            <h5>{recipe.title}</h5>
                            <p>{recipe.price}</p>
                        </div>
                        <p>{recipe.description}</p>
                        <button className='orderBtn' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                    </div>
                 </div>)
            }
            </div>
        </div>
    );
};

export default Menu;