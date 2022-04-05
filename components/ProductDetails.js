testApp.component('product-details', {
    props: {
        details: {
            type: String
        }
    },
    template: /*html*/
        `
    <div>
    <p>Hier ist der prop, ein string: {{ computeDetails }}</p>
    <button class="button" @click="run">test</button>
    </div>
    `,
    data() {
        return {
            beispiel: 1
        }
    },

    computed: {
        computeDetails() {
            return this.details
        }
    },

    methods: {
        run() {
            console.log(this.details)
        }
    }
})