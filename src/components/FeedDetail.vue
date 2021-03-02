<template>
  <div>
    <div>
      <h3>{{detail.data.title}}</h3>
      <p>{{detail.data.contents}}</p>
    </div>
  </div>
</template>

<script>
export default {
created(){
        this.$store.dispatch('FETCH_DETAIL')
    },

    computed:{
        detail(){
            return this.$store.state.detail
        }
    }
}

</script>

<style>

</style>