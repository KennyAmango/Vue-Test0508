<script>

export default ({
    props: [
        "title",
        "content"
    ],
    methods: {
        changeShowOutSide() {

            this.$emit("switch")

        }
    }
})

</script>

<template>
    <div class="model">

        <!-- Model  Card -->
        <div class="card2">

            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
            <button type="button" @click="changeShowOutSide">Close</button>
        </div>

        <!-- BackGround -->
        <div class="bg">

        </div>

    </div>
</template>

<style lang="scss" scoped>
.model {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transition: 1s;


    .card2 {
        background-color: #fff;
        width: 30vw;
        border-radius: 2rem;
        padding: 2rem;
        text-align: center;

        h2 {
            margin: 0;
        }
    }

    .bg {
        position: fixed;
        top: 0;
        left: 0;
        background-color: black;
        opacity: 70%;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

}
</style>