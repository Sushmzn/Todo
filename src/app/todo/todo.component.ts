import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports:[FormsModule, CommonModule]
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = '';
showDropdownForTodoId: number | null = null;

  addTodo() {
    if (this.newTodo.trim()) {
      const todo: Todo = {
        id: Date.now(),
        title: this.newTodo.trim(),
        completed: false
      };
      this.todos.push(todo);
      this.newTodo = '';
    }
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

deleteTodo(todo: Todo) {
  this.todos = this.todos.filter(t => t.id !== todo.id);
}
toggleDropdown(todo: Todo) {
    if (this.showDropdownForTodoId === todo.id) {
      this.showDropdownForTodoId = null; // close dropdown if already open
    } else {
      this.showDropdownForTodoId = todo.id; // open this todo dropdown
    }
  }
confirmDelete(todo: any) {
  todo.showDropdown = false; // close dropdown
    this.deleteTodo(todo);
  }
 isDropdownOpen(todo: Todo): boolean {
    return this.showDropdownForTodoId === todo.id;
  }
 Complete(todo: Todo) {
  const targetTodo = this.todos.find(t => t.id === todo.id);
  if (targetTodo) {
    targetTodo.completed = true;
  }
        this.showDropdownForTodoId = null; // close dropdown if already open

}
}
