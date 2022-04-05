const testApp = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true,
            details: "ok"

        }
    },

    methods: {
        updateCart(argu) {
            console.log(argu)
            this.cart += argu
            if (this.cart < 0) {
                this.cart = 0
            }
        }
    }

})
