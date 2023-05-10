<script>
import FormView from "../components/Form.vue"
export default ({
    components: {
        FormView
    },
    data() {
        return {
            inputText: "123"
        }
    },
    methods: {
        getPush(sourceData) {
            // if (this.inputText === "從內部傳來的") {
            //     this.inputText = "嘿嘿"
            // }
            // else {
            //     this.inputText = "從內部傳來的"
            // }

            this.inputText = sourceData
        }
    }
})
</script>

<template>
    <div class="emit">
        <h1>Emit</h1>
        <p>{{ inputText }}</p>
        <FormView :inputText="inputText" @emitPush=getPush />
    </div>
</template>

<style scoped></style>