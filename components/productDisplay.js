testApp.component('product-display', {

    template: /*html*/
        `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image" :class="{'out-of-stock-img': !(inStock)}">
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul>
                <p v-if="inStock > 0">In Stock</p>
                <p v-else-if="inStock === 0"> Out of stock</p>
                <p v-if="onSale===true"> {{ saleMessage }}</p>
                <p v-else>So sock, much warm, </p>
                <p>Shipping: {{ shipping }}</p>
                <div v-for="(variant, index) in variants"
                     v-bind:key="variant.id"
                     @click="updateVariant(index)"
                     class="color-circle"
                     :style="{backgroundColor: variant.color}"
                ></div>

                <button class="button" :class="{disabledButton: !(inStock)}" :disabled="!(inStock)"
                        v-on:click="addToCart(1), 'dumie'">Add to cart
                </button>
                <button class="button" v-on:click="addToCart(-1)">Take from cart</button>
                <button class="button" v-on:click="killCart">Kill cart</button>
                <button class="button" v-on:click="killStock">Kill Stock</button>
                <button class="button" v-on:click="reStock">Restock</button>

                <h2>No in cart: {{cart}}</h2>
                <input class="widdi" id="numberOfItemsInCart" v-model.number="noItems"/>
                <button class="button" :class="{disabledButton: !(inStock)}" :disabled="!(inStock)"
                        @click="addToCart(noItems)">Add {{noItems}} to cart</button>

                <input type="checkbox" v-model="statementIsTrue"/>
                <p v-show="statementIsTrue">Checkbox is checked</p>
                <p v-show="!(statementIsTrue)">Checkbox is not checked</p>
                <img src="./images/testimage/img.png">
            </div>
        </div>
    </div>`,

    data() {
        return {
            product: 'Socks',
            brand: "Cool Brand",
            sizes: ["S", "M", "L", "XL"],
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [{
                id: 2234,
                color: 'green',
                'image': './assets/images/socks_green.jpg',
                quantity: 50,
                sale: true
            }, {id: 2235, color: 'blue', 'image': './assets/images/socks_blue.jpg', quantity: 0, sale: false}],
            selectedVariant: 0,
            existentialQuestion: 'Am I truly an alligator?',
            statementIsTrue: true,
            noItems: 1,
            index: 0,
            dummie: 1
        }
    },

    props: {
        premium: {
            type: Boolean,
            required: true
        },
        cart: {}
    },

    computed: {
        title() {
            return this.brand + ' ' + this.product + 'is on sale!'
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        },

        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        image() {
            return this.variants[this.selectedVariant].image
        },

        onSale() {
            return this.variants[this.selectedVariant].sale
        },

        saleMessage() {
            return this.brand + ' ' + this.product + 'are on sale!'
        }
    },

    methods: {
        addToCart(input) {
            this.$emit('addi', input)
        },

        updateVariant(index) {
            this.selectedVariant = index
        },

        takeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
            }
        },

        killCart() {
            this.cart = 0
        },

        killStock() {
            this.inStock = false
            this.killCart()
        },

        reStock() {
            this.inStock = true
        },

        addNoToCart() {
            if (this.inStock) {
                this.cart += this.noItems
            }
        }
    }
})