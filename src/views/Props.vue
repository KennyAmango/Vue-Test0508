<script >
import Child from "../components/Child.vue"
export default ({
    components: {
        Child
    },
    data() {
        return {
            // title: "Props標題",
            // abc: "abc標題",
            cardData: [
                {
                    title: "醜",
                    img: "../../public/img/79644.jpg"
                },
                {
                    title: "game",
                    img: "../../public/img/com.sialiagames.starg.gp.tw_Screenshot_2023.04.10_14.33.51.jpeg"
                },
                {
                    title: "",
                    img: ""
                },
            ]
        }
    }
})

</script>

<template>
    <div>
        <h1>Props</h1>
        <div class="container">

            <!-- <Child :title="cardData[0].title" :imgData="cardData[0].img" /> -->

            <Child v-for="card in cardData" :title="card.title" :imgData="card.img" />

        </div>
    </div>
</template>

<style>
.container {
    width: 100vw;
    display: flex;
    justify-content: space-around;
}
</style>