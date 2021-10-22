<template>
  <div class="ui container">
    <h2 class="ui header">What's your favorite Fullstack clothing item?</h2>
    <button-row></button-row>
  </div>
</template>

<script>
import ButtonRow from "@/components/ButtonRow";
export default {
  name: 'App',
  components: {
  "button-row": ButtonRow
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
.ui.container{
  margin: 20px 0;
}
</style>
