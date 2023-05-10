<script>
export default {
    data() {
        // 設定屬性
        return {
            isRounded: false,
            move: false,
            imgArr: [
                // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5Z2vOKywjiu2pYpI64aFDTZVCOtamy8K-g&usqp=CAU",
                // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAW7BeJ7xr06PEIiERN8-ebCQwy-z147UA4A&usqp=CAU"
                "../../public/img/79644.jpg",
                "../../public/img/com.sialiagames.starg.gp.tw_Screenshot_2023.04.10_14.33.51.jpeg"
            ],
            imgNum: 0,
            boxColor: false
        }
    },
    // 建立按鍵事件
    methods: {
        changeRounded() {
            this.isRounded = !this.isRounded
            this.move = !this.move
        },
        changeImg() {
            this.imgNum = this.imgNum === 1 ? 0 : 1
        },
        changeColor() {
            this.boxColor = !this.boxColor
        }
    },
}


</script>

<template>
    <h1>v-bind</h1>
    <!-- v-on: 可以簡寫成@ -->
    <button type="button" v-on:click="changeRounded">Rounded</button>
    <button type="button" v-on:click="changeImg">changeImg</button>
    <button type="button" v-on:click="changeColor">changeColor</button>
    <!-- 綁定想更改的class ，藉由更改class名來產生不同變化-->
    <div class="box" v-bind:class="{
        rounded: isRounded,
        'to-right': move,
        color: boxColor
    }"></div>
    <div>
        <img v-bind:src="imgArr[this.imgNum]">
    </div>
</template>

<style scoped>
.v-bind {
    position: relative;
}

.box {
    height: 300px;
    width: 300px;
    background-color: blue;
    position: absolute;
    top: 150px;
    left: 0;
    transition: 2s;
}

.rounded {
    border-radius: 50px;
}

.to-right {
    left: 300px;
}

.color {
    background-color: red;
}
</style>