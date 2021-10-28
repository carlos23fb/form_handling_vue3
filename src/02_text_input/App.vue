<template>
<h1>Text Input Form</h1>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "App",
  computed:{
    ...mapGetters({
      clothing_list: 'clothin_list'
    })
  }
}
</script>

<style scoped>

</style>