document.addEventListener('DOMContentLoaded', function() {
    function updateCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const removeAllBtn = document.getElementById('remove-all-btn');
        const emptyCartMessage = document.getElementById('empty-cart-message');
        
        // Clear the existing items
        cartItemsContainer.innerHTML = '';
        
        // Get items from localStorage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        if (cartItems.length === 0) {
            // Show empty cart message and hide remove all button
            emptyCartMessage.style.display = 'block';
            removeAllBtn.style.display = 'none';
        } else {
            // Hide empty cart message and show remove all button
            emptyCartMessage.style.display = 'none';
            removeAllBtn.style.display = 'block';
            
            // Populate the cart with items from localStorage
            cartItems.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <img src="${item.imageSrc}" alt="Product Image">
                    <div class="cart-item-info">
                        <h3>${item.title}</h3>
                        <p>${item.brand}</p>
                        <p>Price: ${item.price}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
            
            // Reattach event listeners for delete buttons
            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const cartItem = this.closest('.cart-item');
                    const itemTitle = cartItem.querySelector('h3').innerText;

                    // Remove item from localStorage
                    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                    cartItems = cartItems.filter(item => item.title !== itemTitle);
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));

                    // Remove item from DOM
                    cartItem.remove();
                    
                    // Update cart after deletion
                    updateCart();
                });
            });
        }
    }

    // Add event listener for "Remove All" button
    document.getElementById('remove-all-btn').addEventListener('click', function() {
        // Clear localStorage
        localStorage.removeItem('cartItems');
        
        // Clear DOM
        document.querySelectorAll('.cart-item').forEach(item => item.remove());

        // Update cart to reflect changes
        updateCart();
    });

    // Initial cart update on page load
    updateCart();
});