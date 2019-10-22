<template>
  <v-form @submit.self.prevent="createNewTodo" class="d-flex justify-center" ref="form">
    <v-col cols="8">
      <v-row class="justify-center">
        <v-text-field
          :counter="25"
          :error-messages="validationError"
          @input="$v.newTodo.$touch()"
          @blur="$v.newTodo.$touch()"
          color="light-green darken-3"
          dense
          label="Create your todo"
          outlined
          type="text"
          v-model.lazy="newTodo"
        ></v-text-field>
        <v-btn
          :disabled="$v.newTodo.$dirty && $v.$invalid"
          class="mx-2 white--text"
          color="light-green darken-3"
          depressed
          fab
          small
          type="submit"
        >
          <v-icon dark>add</v-icon>
        </v-btn>
      </v-row>
    </v-col>
  </v-form>
</template>

<script lang="ts">
import { maxLength } from 'vuelidate/lib/validators';
// import Component from 'vue-class-component'

export default {
  name: 'AddNewTodo',
  data() {
    return {
      newTodo: '',
    };
  },
  validations: {
    newTodo: {
      maxLength: maxLength(25),
    },
  },
  computed: {
    validationError() {
      let error = '';
      if (!this.$v.newTodo.maxLength) {
        return (error = `This field must have less than ${this.$v.newTodo.$params.maxLength.max} letters`);
      }
    },
  },
  methods: {
    createNewTodo() {
      if (this.newTodo === '') {
        return false;
      }
      this.$store.dispatch('addTodo', this.newTodo);
      this.$v.$reset();
      this.newTodo = '';
    },
  },
};
</script>
