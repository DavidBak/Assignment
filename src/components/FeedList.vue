<template>
  <div>
      <form id="sponsored">
        
        <img :src="`https://cdn.comento.kr/assignment/${ads.data[0].img}`">
        <h3>{{ads.data[0].title}}</h3>
        <p>{{ads.data[0].contents}}</p>
      </form>
  </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('FETCH_ADS')
    },

    computed:{
        ads(){
            return this.$store.state.ads
        }
    }
}
</script>

<style>
</style>