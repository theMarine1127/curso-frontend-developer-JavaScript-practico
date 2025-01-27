/**primero crea una variable seleccioando la clase */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

/**luego usa el evento toggle para que aparesca y desaparesca el menu */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

/**luego crea la funcion con el nombre del metodo toggleDesktopMenu */
/**La funcion que quita o muestra el menu */
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'BikeLittle',
    price: 10,
    image: "https://falabella.scene7.com/is/image/FalabellaCO/gsc_119777847_2479940_1?wid=800&hei=800&qlt=70",

});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name: 'TV',
    price: 320,
    image: "https://www.lg.com/content/dam/channel/wcms/co/images/monitores/27tq625s-ps_awc_escb_co_c/U03_450.jpg",

});
productList.push({
    name: 'PC',
    price: 520,
    image: "https://www.lifewire.com/thmb/WZdlwJIGSRA9Bkk7tKIj9Mgg-lk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/xxl-desktop-pc-98013994-5c4dcc47c9e77c0001380389.jpg",

});

    /*
    < div class="product-card" >
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </>
    */


function renderProducts(arr) {
    for ( product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('producto-info');
    
        const productInfoDiv = document.createElement('div');
        /*productInfoDiv.classList.add('div');*/
    
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$ ' + product.price;
    
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        // productInfoDiv.appendChild(productPrice);
        // productInfoDiv.appendChild(productName);
        productInfoDiv.append(productPrice,productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        // productInfo.appendChild(productInfoDiv);
        // productInfo.appendChild(productInfoFigure);
        productInfo.append(productInfoDiv,productInfoFigure);
    
        // productCard.appendChild(productImg);
        // productCard.appendChild(productInfo);
        productCard.append(productImg,productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
