<template>
<div>
  <button class="ui button" name="button-hoodei" value="fullstack-hoodie" @click="onButtonClick">Hoddie</button>
  <button class="ui button" name="button-tee" value="fullstack-tee" @click="onButtonClick">Tee</button>
  <button class="ui button" name="button-fitted-cap" value="fullstack-fitted-cap" @click="onButtonClick">Fitted Cap</button>
  <button class="ui button" name="button-jacket" value="fullstack-jacket" @click="onButtonClick">Jacket</button>
</div>
</template>

<script>
export default {
  name: "ButtonRow",
  methods:{
    onButtonClick(evt) {
      const button = evt.target;
      console.log(`The user clicked ${button.name}: ${button.value}`)
    }
  }
}
</script>

<style scoped>

</style>