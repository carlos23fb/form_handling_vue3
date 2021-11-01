<template>

  <div class="ui container">
    <h2 class="title">Fullstack Clothing Inquiry Sheet</h2>
    <br>
    <br>
    <div class="card">
      <div class="ui segment">
        <input-form></input-form>
        <input-list></input-list>
      </div>
    </div>
  </div>

</template>

<script>
import InputForm from '@/02_text_input/components/InputForm'
import InputList from "@/02_text_input/components/InputList";

export default {
  name: "App",
  components: {
    "input-form": InputForm,
    "input-list": InputList
  }
}
</script>

<style>

.ui.container {
  margin: 20px 0;
}

html, body {
  background-color: #292929;
}

.title {
  color: lightgreen;
  font-weight: bold;
  font-family: monospace;
}


.card {
  border-color: transparent;
  background-color: #1b1e21;
  border-radius: 10px;
  box-shadow: 10px 10px 5px -5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -5px rgba(0, 0, 0, 0.75);
}

.ui.segment {
  background-color: #363636;
}


</style>