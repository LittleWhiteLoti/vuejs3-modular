<template>
    <div class="component">
        <h2>Old Counter</h2>
        <input ref="input" type="number" />
        <div>
            <button>
                Increment
            </button>
            <button>
                Decrement
            </button>
            <button>
                Reset
            </button>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        let input

        return {
            input
        }
    },
    mounted() {
        this.input = this.$refs['input']
    },
    computed: {

    },
    methods: {

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