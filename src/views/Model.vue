<script>
import PopUp from '../components/PopUp.vue'

export default ({
    components: {
        PopUp
    },
    data() {
        return {
            isShow: false,
            modelInfo: {
                title: "標題",
                content: "內文"
            }
        }
    },
    methods: {
        changeShow() {
            this.isShow = !this.isShow
        }
    }
})

</script>
<template>
    <div class="model-ex">
        <h1>Model</h1>
        <button type="button" @click="changeShow">彈跳</button>
    </div>

    <PopUp v-show="isShow" @switch="changeShow" :title="modelInfo.title" :content="modelInfo.content" />
</template>
<style  lang="scss" scoped>
.model-ex {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
</style>