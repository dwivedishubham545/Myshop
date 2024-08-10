const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click' , () =>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click' , () =>{
        nav.classList.remove('active');
    })
}



document.querySelectorAll('.pro').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('detail-card').style.display = 'block';

        const imageSrc = this.querySelector('img').src;
        const title = this.querySelector('h5').innerText;
        const brand = this.querySelector('span').innerText;
        const rating = this.querySelectorAll('.star i').length;
        const price = this.querySelector('h4').innerText;
        const description = "Detailed description of " + title;

        document.getElementById('detail-image').src = imageSrc;
        document.getElementById('detail-title').innerText = title;
        document.getElementById('detail-brand').innerText = brand;
        document.getElementById('detail-rating').innerHTML = '<i class="fas fa-star"></i>'.repeat(rating);
        document.getElementById('detail-price').innerText = price;
        document.getElementById('detail-description').innerText = description;
    });
});

document.querySelector('.close-card').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('detail-card').style.display = 'none';
});

const detailCard = document.getElementById('detail-card');
overlay.addEventListener('click', () => {
    // Hide overlay and detail card when clicking on overlay
    overlay.style.display = 'none';
    detailCard.style.display = 'none';
});

// Handle adding item to cart

document.addEventListener('DOMContentLoaded', () => {
    // Handling the Add to Cart button
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            console.log('Add to Cart button clicked'); // Debugging line

            // Retrieve item details
            const imageSrc = document.getElementById('detail-image').src;
            const title = document.getElementById('detail-title').innerText;
            const brand = document.getElementById('detail-brand').innerText;
            const price = document.getElementById('detail-price').innerText;

            console.log('Item details:', { imageSrc, title, brand, price}); // Debugging line

            // Create item object
            const item = {
                imageSrc,
                title,
                brand,
                price,
            };

            // Retrieve and update cart items
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push(item);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            console.log('Cart items updated:', cartItems); // Debugging line

            // Optionally, show a confirmation message and close the detail card
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('detail-card').style.display = 'none';
        });
    }

    // Close card functionality
    document.querySelector('.close-card').addEventListener('click', function() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('detail-card').style.display = 'none';
    });

    // Hide detail card when clicking on the overlay
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        document.getElementById('detail-card').style.display = 'none';
    });
});
