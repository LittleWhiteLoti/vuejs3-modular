<template>
    <div class="component">
        <h2>Modern Counter</h2>
        <input ref="input" type="number" />
        <div>
            <button @click="increment">
                Increment
            </button>
            <button @click="decrement">
                Decrement
            </button>
            <button @click="reset">
                Reset
            </button>
        </div>
    </div>
</template>

<script>

import { useStore } from 'vuex'

export default {

    data() {
        let store = useStore()

        let input

        return {
            store,
            input
        }
    },
    mounted() {
        this.input = this.$refs['input']
    },
    methods: {
        increment() {
            this.store.commit('incrementValue', this.input.value)
        },
        decrement() {
            this.store.commit('decrementValue', this.input.value)
        },
        reset() {
            this.store.commit('resetValue')
        }
    }
}

</script>

<style scoped>

    .component {
        width: 20%;
    }

    input {
        padding: 0;
        margin: 0;
        width: 100%
    }
    
    .component > div {
        display: flex;
        flex-grow: 1;
        flex-basis: 100%;
    }

    .component div button {
        flex-grow: 1;
    }

</style>