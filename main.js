let products = [
    {
        image: "https://s3-sa-east-1.amazonaws.com/saasargentina/WiwNs7wpq2y6wxgSsiOD/imagen",
        name: "Auriculares HyperX Cloud Flight Wireless",
        category: "Auriculares",
        price: "$117999",
    },
    {
        image: "https://aypcomputacion.com/wp-content/uploads/2022/04/Diseno-sin-titulo-10.jpg",
        name: "TECLADO HYPERX ORIGINS 60%",
        category: "Teclado",
        price: "$112999",
    },
    {
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_683814-MLA41164429541_032020-F.webp",
        name: "Mouse Pad gamer HyperX Speed",
        category: "MousePad",
        price: "$64000",
    },
    {
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_859309-MLU72857147358_112023-F.webp",
        name: "Monitor Gamer 27 Aoc G2490vx 144hz",
        category: "Monitores y Tvs",
        price: "$619980",
    },
    {
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_941268-MLA44847003228_022021-F.webp",
        name: "Msi Geforce Rtx 3080 10gb",
        category: "Placa de video",
        price: "$1240000",
    },
    {
        image: "https://www.venex.com.ar/products_images/1547129296_cpcorsaircmw16gx4m2c3600c181.jpg",
        name: "Memoria RAM 16Gb 3600Mhz Corsair",
        category: "Memorias RAM",
        price: "$109549",
    },
    {
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_638524-MLU72933231487_112023-F.webp",
        name: "Auriculares G733 Con Micrófono Inalámbricos",
        category: "Auriculares",
        price: "$198000",
    },
    {
        image: "https://www.venex.com.ar/products_images/1663252902_1645550587_powercolor-amd-radeon-bc-2235-10gb-gddr6.jpg",
        name: "AMD Radeon RX 6700 10Gb GDDR6",
        category: "Placa de video",
        price: "$1055998",
    },
    {
        image: "https://www.venex.com.ar/products_images/1634666261_sd56f1g.jpeg",
        name: "Kingston Fury Beast DDR4 8Gb 3600Mhz",
        category: "Memorias RAM",
        price: "$100318",
    },
    {
        image: "https://www.venex.com.ar/products_images/1633033971_sd651f4s.png",
        name: "Samsung T350 FHD 22' IPS 5ms HDMI VGA 75Hz",
        category: "Monitores y Tvs",
        price: "$265998",
    },
    {
        image: "https://mundofixar.vtexassets.com/arquivos/ids/1865406-600-auto?v=638369495903430000&width=600&height=auto&aspect=true",
        name: "Teclado Gamer Redragon K616-RGB Fizz Pro",
        category: "Teclados",
        price: "$44500",
    },
    {
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_854109-MLU72644549083_112023-F.webp",
        name: "Mouse Pad gamer Logitech",
        category: "MousePad",
        price: "$23549",
    },
];

const loadProducts = () => {
    
    const containerProducts = document.getElementById('container_products');
    containerProducts.innerHTML = '';

    products?.map((product) => {
        const containerProducts = document.getElementById('container_products');
        const producto = document.createElement('div');
        producto.classList.add('product');

        producto.innerHTML = `
            <img src=${product.image} alt=${product.name}>
            <h3>${product.name}</h3>
            <span>${product.category}</span>
            <form class="actions_form">
                <button class="btn_addToCart">Add to cart</button>
                <p>${product.price}</p>
            </form>`
        containerProducts.appendChild(producto);

        // Después de crear los elementos, obtener todos los botones por su clase
        const addToCartButtons = document.querySelectorAll('.btn_addToCart');

        // Agregar el evento 'click' a cada botón
        addToCartButtons.forEach((button) => {
            button.addEventListener('click', addToCart);
        });
    })
}


addEventListener('DOMContentLoaded', loadProducts)


// agregar productos al carrito

const addToCart_btn = document.getElementById('btn_addToCart');

const cart = [];
const addToCart = (e) => {
    e.preventDefault();

    const productElement = e.target.closest('.product');
    const productName = productElement.querySelector('h3').innerText;
    const productImage = productElement.querySelector('img').src;
    const productPrice = productElement.querySelector('p').innerText;
    const productCategory = productElement.querySelector('span').innerText;

    const product = { productImage, productName, productPrice, productCategory }

    cart.push(product)
    // console.log(cart);
    return cart
}
addToCart_btn?.addEventListener('click', addToCart)


// buscar productos por nombre 

const productsCopy = [...products];

const inputSearch = document.getElementById('input_search');

const searchProduct = (e) => {
    const nameProduct = e.target.value.trim().toLowerCase(); // Añadir trim para eliminar posibles espacios en blanco al inicio y al final


    // console.log('Copia de productos:', productsCopy);
    if (nameProduct) {
        let filterProd = productsCopy.filter(product => product.name.toLowerCase().includes(nameProduct));
        // console.log(filterProd);
        products = filterProd;
        loadProducts()
    } else {
        console.log('Cadena de búsqueda vacía, mostrando todos los productos');
        // console.log(productsCopy);
        products = [...productsCopy]
        loadProducts();
    }
    
}

inputSearch.addEventListener('keyup', searchProduct);
