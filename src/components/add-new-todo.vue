<template>
  <form>
    <div>
      <label for="input">Create your todo</label>
        <input
          :class="status($v.newTodo)"
          @blur="$v.newTodo.$touch()"
          @keyup.enter='createNewTodo'
          id="input"
          type="text"
          v-model.lazy="$v.newTodo.$model"
        />
      <button :disabled="$v.newTodo.$dirty && $v.$invalid" @click='createNewTodo' class="add-todo" type='button'>Add</button>
      <div class="error" v-if="$v.newTodo.$dirty && !$v.newTodo.required">This field is required.</div>
      <div class="error" v-if="$v.newTodo.$dirty && !$v.newTodo.maxLength">This field must have less than
        {{$v.newTodo.$params.maxLength.max}} letters.
      </div>
    </div>
  </form>
</template>

<script>
import {maxLength, required} from 'vuelidate/lib/validators'

export default {
  name: 'AddNewTodo',
  data() {
    return {
      newTodo: ''
    }
  },
  validations: {
    newTodo: {
      required,
      maxLength: maxLength(25)
    }
  },
  methods: {
    createNewTodo() {
      if (this.newTodo === '') {
        return false;
      }
      this.$store.dispatch('addTodo', this.newTodo);
      this.newTodo = '';
      this.$v.$reset();
    },
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      }
    }
  }
}
</script>

<style scoped>
.add-todo {
  cursor: pointer;
  width: 65px;
  height: 30px;
  background-color: #5c8a03;
  font-family: "Helvetica Neue", serif;
  color: white;
  font-size: 10px;
  border-radius: 5px;
  margin: 0 5px 0 5px;
  outline: 0;
}

input {
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
}

.dirty {
  border-color: #5A5;
  background: #EFE;
}

.dirty:focus {
  outline-color: #8E8;
}

.error {
  border-color: red;
  color: red;
}

.error:focus {
  outline-color: #F99;
}

</style>

