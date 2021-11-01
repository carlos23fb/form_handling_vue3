<template>
  <div class="input-form">
    <form class="ui inverted form" @submit="submitForm">
      <div class="field">
        <label>New Item</label>
        <input type="text" v-model="fields.name" placeholder="Add an Item!">
        <span class="error-field ">{{ fieldErrors.name }}</span>
        <span style="float: right; color: lightgreen">  {{ fields.name.length }}/20  </span>
        <span class="error-field" v-if="isNameInputLimitExceeded" style="display: block"> Must be under twenty characters </span>
      </div>
      <div class="ui inverted divider"></div>
      <div class="field">
        <label>Email</label>
        <input type="text" v-model="fields.email" placeholder="What's yopur email?">
        <span class="error-field ">{{ fieldErrors.email }}</span>

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
        <span class="error-field">{{ fieldErrors.urgency }}</span>
        <span v-if="isNotUrgent" class="error-field" style="display: block">Must be moderate to urgent</span>
      </div>
      <div class="field">
        <div class="ui inverted divider"></div>
        <div class="ui checkbox inverted">
          <input type="checkbox" v-model="fields.termsAndConditions">
          <label>I accept the terms and conditions</label>
          <span class="error-field"> {{ fieldErrors.termsAndConditions }} </span>
        </div>

      </div>

      <button class="ui button" :disabled="isNotUrgent || isNameInputLimitExceeded || this.fields.urgency ===''">Submit</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

import isEmail from 'validator/lib/isEmail'

export default {
  name: "InputForm",
  data() {
    return {
      fields: {
        name: '',
        email: '',
        urgency: '',
        termsAndConditions: false
      },
      fieldErrors: {
        name: undefined,
        email: undefined,
        urgency: undefined,
        termsAndConditions: undefined
      }
    }
  },
  computed: {
    isNameInputLimitExceeded(){
      return this.fields.name.length >= 20;
    },
    isNotUrgent(){
      return this.fields.urgency === 'Nonessential';
    }
  },
  methods: {
    ...mapActions({
      addClothingItem: 'addClothingItem'
    }),
    submitForm(evt) {
      evt.preventDefault();
      this.fieldErrors = this.validateForm(this.fields);
      if (Object.keys(this.fieldErrors).length) return;
      const object_request = {...this.fields}
      this.addClothingItem(object_request)
      this.clearForm()
    },
    validateForm(fields) {
      const errors = {};
      if (!fields.name) errors.name = "New name Required";
      if (!fields.email) errors.email = "Email Required";
      if (!fields.urgency) errors.urgency = "Urgency Required";
      if (!fields.termsAndConditions) errors.termsAndConditions = "Terms and conditions have to be approved";


      if (fields.email && !isEmail(fields.email)) {
        errors.email = 'Invalid Email'
      }

      return errors;
    },
    clearForm() {
      this.fields.name = '';
      this.fields.email = '';
      this.fields.urgency = '';
      this.fields.termsAndConditions = false;
    }
  }
}
</script>

<style scoped>
.input-form {
  max-width: 500px;
}

.error-field {
  color: lightcoral;
}

</style>