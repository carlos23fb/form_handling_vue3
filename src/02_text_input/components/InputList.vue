<template>
  <div class="ui segment transparent">
    <h4 class="">Items</h4>
    <ul>
      <li v-for="item in clothing_lis" class="item" :key="item">
        {{ item.name }} {{ item.email }}
      </li>
    </ul>
    <div class="ui label">
      <i class="fas fa-shopping-cart"><span>  {{ clothing_total }} </span></i>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "InputList",
  computed: {
    ...mapGetters({
      clothing_lis: "clothin_list",
      clothing_total: 'clothin_total'
    })
  }
}
</script>

<style scoped>
.segment{
  max-width: 500px;
}
h4{
  color: white;
}
</style>