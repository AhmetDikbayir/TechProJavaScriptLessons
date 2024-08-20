const API_URL = "https://66c39601d057009ee9c0b95e.mockapi.io/";


export const getAllProducts = async () => {
    const res = await fetch(`${API_URL}/products`);
    if(!res.ok) throw new Error('Error');
    const data = await res.json();
    console.log(res);
}


export const createProduct = async (product) => {
    const res = await fetch(`${API_URL}/products, {}`, {
        method: 'POST',
        body: JSON.stringify(product),
    );
    if(!res.ok) throw new Error('Error');
    const data = await res.json();
    console.log(res);
}