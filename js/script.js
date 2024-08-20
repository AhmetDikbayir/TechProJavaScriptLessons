import { getAllProducts } from "./products.js";

const frmProduct = document.getElementById('frmProduct');

const renderProductList = (products) => {

    let strProducts = "";

    fetch('https://66c39601d057009ee9c0b95e.mockapi.io/products')
.then(response => response.json())
.then(data => {
    data.forEach((item, index) => {
        console.log(item.description);

        strProducts += `
        <tr>
            <th scope="row">${index+1}</th>
            <td><img src="${item.image}" alt="${item.title}" width="100"></td>
            <td>${item.title}</td>
            <td>${item.category}</td>
            <td>${item.price}</td>
            <td>${item.description}</td>
        </tr>`;        
    });
    document.querySelector('#tblProducts tbody').innerHTML = strProducts;
})
.catch(error => console.error('Error:', error));
}

const init = async () => {

const products = await getAllProducts();
renderProductList(products);

}

frmProduct.addEventListener('submit', (e) => {
    e.preventDefault();

    
});

init();