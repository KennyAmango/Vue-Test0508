<script >
import { RouterLink } from 'vue-router'
import PopUp from '../components/PopUp.vue'

export default {
    components: {
        PopUp
    },
    data() {
        return {
            isShow: false,
            homeInfo: {
                title: "首頁",
                content: "首頁內文"
            }
        }
    },
    methods: {
        changeShow() {
            this.isShow = !this.isShow
        }
    }

}


</script>

<template>
    <h1>首頁</h1>
    <RouterLink to="router-view">RouterView</RouterLink>
    <button type="button" @click="changeShow">彈跳</button>
    <PopUp v-show="isShow" @switch="changeShow" :title="homeInfo.title" :content="homeInfo.content" />
</template>
<style scoped></style>