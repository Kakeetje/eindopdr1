const ProductsApi = [
    {
        name: "Nigiri",
        price: new Intl.NumberFormat('nl-NL', {
            style: 'currency',
            currency: 'EUR'
        }),
        count: 0,
        counterVal: 1,
        inCart: false
    }
];

export default ProductsApi;
