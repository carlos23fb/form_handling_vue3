<template>
  <div class="ui container">
    <h2 class="ui header">What's your favorite Fullstack clothing item?</h2>
    <button-row></button-row>
  </div>
</template>

<script>
import ButtonRow from "@/01_basic_button/components/ButtonRow";
export default {
  name: 'App',
  components: {
  "button-row": ButtonRow
  }
}
</script>

<style>

.ui.container{
  margin: 20px 0;
}
</style>
