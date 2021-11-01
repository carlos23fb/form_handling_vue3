<template>
  <div class="input-form">
    <form class="ui inverted form" @submit="submitForm">
      <div class="field">
        <label >New Item</label>
        <input  type="text" v-model="fields.name" placeholder="Add an Item!">
        <span class="error-field ">{{ fieldErrors.name }}</span>
      </div>
      <div class="ui inverted divider"></div>
      <div class="field">
        <label >Email</label>
        <input type="text" v-model="fields.email" placeholder="What's yopur email?">
      </div>
      <div class="field">
        <div class="ui inverted divider"></div>
        <label> Urgency </label>
        <select v-model="fields.urgency" class="ui fluid search dropdown">
          <option disabled value="">Please select one</option>
          <option>Nonessential</option>
          <option>Moderate</option>
          <option>Urgent</option>
        </select>
      </div>
      <div class="field">
        <div class="ui inverted divider"></div>
        <div class="ui checkbox inverted">
          <input   type="checkbox" v-model="fields.termsAndConditions">
          <label>I accept the terms and conditions</label>

        </div>

      </div>

      <button class="ui button">Submit</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "InputForm",
  methods: {
    ...mapActions({
      addClothingItem: 'addClothingItem'
    }),
    submitForm(evt) {
      const object_request = {...this.fields}
      this.addClothingItem(object_request)
      evt.preventDefault();
      this.clearForm()
    },
    clearForm() {
      this.fields.name = '';
      this.fields.email = '';
      this.fields.urgency = '';
      this.fields.termsAndConditions = false;
    }
  },
  data() {
    return {
      fields: {
        name: '',
        email: '',
        urgency: '',
        termsAndConditions: false
      },
      fieldErrors:{
        name: undefined,
        email: undefined,
        urgency: undefined,
        termsAndConditions: undefined
      }
    }
  }
}
</script>

<style scoped>
.input-form{
  max-width: 500px;

}

</style>