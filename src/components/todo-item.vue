<template>
  <v-list-item class="d-flex flex-row flex-nowrap todo-item">
    <v-row align="center" v-if="!isEditing">
      <v-list-item-action>
        <v-checkbox :input-value="todo.completed" @change="toggleStatus" color="success" hide-details></v-checkbox>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          {{ todo.title }}
        </v-list-item-title>
      </v-list-item-content>
      <v-btn @click="enterEditingMode" class="mr-4" color="light-green darken-3" dark fab outlined x-small>
        <v-icon>edit</v-icon>
      </v-btn>
      <v-dialog max-width="290" persistent v-model="dialog">
        <template v-slot:activator="{ on }">
          <v-btn color="light-green darken-3" dark fab outlined v-on="on" x-small>
            <v-icon>delete</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-md-left">Delete this todo?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = false" color="green darken-1" text>NO</v-btn>
            <v-btn @click="removeTodo" color="green darken-1" text>YES</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row class="d-flex justify-space-between align-center pa-0" v-else>
      <v-col class="pa-0" sm="7">
        <v-text-field
          :counter="25"
          :error-messages="validationError"
          @blur="$v.editingValue.$touch()"
          @input="$v.editingValue.$touch()"
          @keyup.enter="saveEdit"
          @keyup.esc="cancelEdit"
          class="pa-0"
          dense
          type="text"
          v-model.lazy="editingValue"
        ></v-text-field>
      </v-col>
      <v-btn @click="cancelEdit" class="ml-4" color="light-green darken-3" dark fab outlined x-small>
        <v-icon>close</v-icon>
      </v-btn>
    </v-row>
  </v-list-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { maxLength, required } from 'vuelidate/lib/validators';
import { ITodoItem } from '../types/todo';

@Component({
  name: 'TodoItem',
  validations: {
    editingValue: {
      required,
      maxLength: maxLength(25),
    },
  },
})
export default class TodoItem extends Vue {
  @Prop() public readonly todo: ITodoItem;
  @Prop() public readonly id: string;

  public dialog = false;
  public isEditing = false;
  public editingValue = '';

  get validationError(): string {
    if (!this.$v.editingValue.required) {
      return 'This field is required';
    }
    if (!this.$v.editingValue.maxLength) {
      return `This field must have less than ${this.$v.editingValue.$params.maxLength.max} letters`;
    }
    return '';
  }

  public enterEditingMode(): void {
    this.editingValue = this.todo.title;
    this.isEditing = true;
  }
  public saveEdit(): void {
    if (this.$v.editingValue.$dirty && this.$v.$invalid) {
      return;
    }
    this.$store.dispatch('editTodoById', {
      title: this.editingValue,
      id: this.id,
    });
    this.isEditing = false;
  }

  public cancelEdit(): void {
    this.isEditing = false;
  }

  public removeTodo(): void {
    this.$store.dispatch('removeTodoById', this.id);
    this.dialog = false;
  }

  public toggleStatus(): void {
    this.$store.dispatch('toggleStatus', this.id);
  }
}
</script>

<style scoped>
.todo-item {
  min-height: 54px;
}
</style>
