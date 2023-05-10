<script>
export default ({
    components: {

    },
    props: ["inputText"],
    data() {
        return {
            sourceData: ""
        }
    },
    methods: {
        push() {
            console.log("push")
            this.$emit("emitPush", this.sourceData)
        }
    }
})

</script>

<template>
    <div>
        <form>
            <!-- <p>{{ sourceData }}</p> -->
            <input type="text" v-model="sourceData">
            <button type="button" @click="push">Click</button>
        </form>
    </div>
</template>

<style scoped></style>