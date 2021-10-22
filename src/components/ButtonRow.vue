<template>
<div>
  <button class="ui button" @click="onHoddieClick">Hoddie</button>
  <button class="ui button" @click="onTeeClick">Tee</button>
  <button class="ui button">Fitted Cap</button>
  <button class="ui button">Jacket</button>
</div>
</template>

<script>
export default {
  name: "ButtonRow",
  methods:{
    onHoddieClick(evt){
      console.log('The user clicked button-hoodie', evt)
    },
    onTeeClick(evt){
      console.log('The user clicked button-tee', evt)
    }
  }
}
</script>

<style scoped>

</style>