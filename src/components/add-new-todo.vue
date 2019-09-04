<template>
  <div class="middle">
    <div id="fancy-inputs">
      <label class="input">
        <input
          @keyup.enter='createNewTodo'
          type="text"
          v-model="newTodo"
        />
        <span><span>Create your todo</span></span>
      </label>
      <button @click='createNewTodo' class="add-todo">Add</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddNewTodo',
  data() {
    return {
      newTodo: ''
    }
  },

  methods: {
    createNewTodo() {
      if (this.newTodo === '') {
        return false;
      }
      this.$emit('addTodo', this.newTodo);
      this.newTodo = '';
    }
  }
}
</script>

<style scoped>
.middle {
  width: 460px;
  height: 150px;
  margin: 0 auto;
}

#fancy-inputs {
  width: 70%;
  margin: 0 auto;

}

#fancy-inputs label.input {
  float: left;
  width: 370px;
  height: 42px;
  margin: 50px 0 0 0;
  position: relative;
  clear: both;
}

#fancy-inputs label.input span {
  width: 70%;
  height: 40px;
  position: absolute;
  left: 0;
  cursor: text;
}

#fancy-inputs label.input span span {
  position: absolute;
  top: 0;
  z-index: 1;
  font-family: "Helvetica Neue";
  font-size: 20px;
  color: #2d0c03;
  text-indent: 10px;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
}

#fancy-inputs label.input span:before {
  content: '';
  width: 0%;
  height: 3px;
  background-color: #2d0c03;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
}

#fancy-inputs label.input span:after {
  content: '';
  width: 0%;
  height: 3px;
  background-color: #2d0c03;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
}

#fancy-inputs input {
  float: left;
  width: 370px;
  height: 40px;
  padding: 0 10px;
  border: 0;
  background-color: transparent;
  color: #2d0c03;
  font-family: "Helvetica Neue", serif;
  font-size: 22px;
  position: relative;
  z-index: 99;
}

#fancy-inputs input:focus {
  outline: 0;
}

#fancy-inputs input:focus + span span {
  cursor: initial;
  position: absolute;
  top: -35px;
  color: #2c3e50;
}

#fancy-inputs input:focus + span:before {
  width: 50%;
}

#fancy-inputs input:focus + span:after {
  width: 50%;
}

#fancy-inputs span.fixed span {
  top: -35px;
}

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

</style>
