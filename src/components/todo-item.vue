<template>
  <li>
    <div class="item-container" v-if="!isEditing">
      <input class="toggle" type="checkbox" v-model="todo.completed"/>
      <label>
        {{todo.title}}
      </label>
      <button @click="editMode" class="edit-item">Edit</button>
      <button @click="$emit('removeTodoItem')" class="remove-item">Remove</button>
    </div>
    <div class="edit-item-container" v-else>
      <input
        type="text"
        v-model="editingValue"
        @keyup.enter="saveEdit"
        @keyup.esc="cancelEdit"
      />
      <button @click="cancelEdit" class="cancel-edit">Cancel</button>
    </div>

  </li>
</template>

<script>

export default {
  name: 'TodoItem',

  props: {
    todo: Object
  },

  data() {
    return {
      isEditing: false,
      editingValue: '',
    }
  },

  methods: {
    editMode() {
      this.editingValue = this.todo.title;
      this.isEditing = true;
    },
    saveEdit() {
      this.$emit('editTodo', this.editingValue);
      this.isEditing = false;
    },
    cancelEdit() {
      this.isEditing = false;
    }
  }
}

</script>

<style scoped>
.item-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
}

.edit-item-container input {
  width: 65%;
  height: 40px;
  font-family: "Helvetica Neue", serif;
  font-size: 18px;
  border: 0;
  border-bottom: 1px solid #2d0c03;
  outline: 0;
  margin: 35px;
}

li .toggle {
  text-align: center;
  width: 35px;
  height: 35px;
  position: absolute;
  top: 0;
  bottom: 0;
  border: none;
  -webkit-appearance: none;
  appearance: none;
  outline: 0
}

li .toggle + label {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==");
  background-repeat: no-repeat;
  background-position: 15px center;
}

li .toggle:checked + label {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem00LjM5MyA3LjVsLTUuNjQzIDUuNzg0LTIuNjQ0LTIuNTA2LTEuODU2IDEuODU4IDQuNSA0LjM2NCA3LjUtNy42NDMtMS44NTctMS44NTd6Ii8+PC9zdmc+");
}

li label {
  width: 80%;
  font-family: "Helvetica Neue", serif;
  color: #2d0c03;
  font-size: 25px;
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
}

li.completed label {
  text-decoration: line-through;

}

.edit-item, .remove-item, .cancel-edit {
  cursor: pointer;
  width: 65px;
  height: 30px;
  background-color: #5c8a03;
  font-family: "Helvetica Neue", serif;
  color: white;
  font-size: 10px;
  border-radius: 5px;
  margin: 0 5px 0 5px;
  outline: 0
}

</style>
