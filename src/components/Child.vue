<script >
export default ({
    components: {

    },
    props: [
        "title",
        "imgData"

    ],
    data() {
        return {

        }
    },
    methods: {

    }
})


</script>

<template>
    <div class="card">
        <h1>{{ title }}</h1>
        <img :src="imgData" :alt="title" class="img">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quis blanditiis voluptate optio cupiditate
            numquam cum natus accusamus minima officia, aliquid praesentium. Id incidunt doloremque corrupti accusamus
            ducimus nam tempore?</p>
        <p>abc</p>
    </div>
</template>

<style>
.card {

    width: 200px;
    height: auto;
    border: 1px;
    border-radius: 2rem;
    padding: 2rem;
    background-color: burlywood;
}

img {
    width: 180px;
    height: 150px;
}
</style>