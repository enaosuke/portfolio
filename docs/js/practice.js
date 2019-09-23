var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue',
        product: 'Socks',
        image: './images/sample/sample1.png',
        description: 'オレンジ',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-Men"],
        variants: [
            {
                variantId: 2233,
                variantColor: "orange",
                variantImage: './images/sample/sample1.png',
            },
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './images/sample/sample2.png',
            }
        ],
        cart: 0
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})