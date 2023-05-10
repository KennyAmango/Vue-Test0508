<script>
export default ({
    data() {
        return {
            isShow: true
        }
    },
    methods: {
        change() {
            this.isShow = !this.isShow
        }
    }
})
</script>

<template>
    <div>
        <h1>V-Show</h1>
        <div class="boxes">
            <div v-show="isShow" class="box box1"></div>
            <div v-if="isShow" class="box box2"></div>
        </div>
        <button type="button" @click="change">change</button>
        {{ isShow }}
    </div>
</template>

<style>
.boxes {
    position: relative;
}

.box {
    width: 50px;
    height: 50px;

}

.box1 {
    background-color: blue;


}

.box2 {
    background-color: red;

}
</style>