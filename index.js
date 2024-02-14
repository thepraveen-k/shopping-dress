const products = {
    men: ["images/shopify1.png", "images/shopify2.png", "images/shopify3.png", "images/shopify4.png"],
    women: ["images/shopify5.png", "images/shopify6.png", "images/shopify7.png", "images/shopify8.png"],
    kids: ["images/shopify9.png", "images/shopify10.png", "images/shopify11.png", "images/shopify12.png"]
};

function filterProducts(category) {
    
    document.getElementById('menProducts').style.display = 'none';
    document.getElementById('womenProducts').style.display = 'none';
    document.getElementById('kidsProducts').style.display = 'none';

    
    document.getElementById(category + 'Products').style.display = 'flex';

   
    const container = document.getElementById(category + 'Products');
    container.innerHTML = '';
    products[category].forEach((image, index) => {
        let discountLabel = '';
        let productTitle = '';
        switch (index % 4) {
            case 0:
                discountLabel = 'Wedding Special';
                productTitle = 'Mens Kurta • Manyvar';
                break;
            case 1:
                productTitle = 'RCB Tshirt • Puma';
                break;
            case 2:
                discountLabel = 'On Offer';
                productTitle = 'Green Charm • Myntra';
                break;
            case 3:
                discountLabel = 'New Season';
                productTitle = 'Mens Tshirt • Myntra';
                break;
        }

        if (category === 'women') {
            switch (index % 4) {
                case 0:
                    discountLabel = 'Wedding Special';
                    productTitle = 'Women Kurti • Manyvar';
                    break;
                case 1:
                    productTitle = 'Yellow Castle • Myntra';
                    break;
                case 2:
                    discountLabel = 'On Offer';
                    productTitle = 'Women Black • Myntra';
                    break;
                case 3:
                    discountLabel = 'New Season';
                    productTitle = 'METRO-FAS. • Myntra';
                    break;
            }
        }

        if (category === 'kids') {
            switch (index % 4) {
                case 0:
                    discountLabel = 'Wedding Special';
                    productTitle = 'Baby Dress • Myntra';
                    break;
                case 1:
                    productTitle = 'Baby Outfit • Myntra';
                    break;
                case 2:
                    discountLabel = 'On Offer';
                    productTitle = 'Baby Tshirt • Myntra';
                    break;
                case 3:
                    discountLabel = 'New Season';
                    productTitle = 'Baby Tshirt • Myntra';
                    break;
            }
        }

        const card = `
            <div class="product-card">
                <img class="product-image" src="${image}" alt="Product">
                <div class="discount-label">${discountLabel}</div>
                <h2 class="product-title">${productTitle}</h2>
                <div class="price-container">
                    <p class="product-price">Rs 1199.00 </p>
                    &nbsp;&nbsp;
                    <strike class="product-original-price"> 1299.00</strike>
                    <p class="product-price discount">50% Off</p>
                </div>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;
        container.innerHTML += card;
    });
}
