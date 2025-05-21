import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Todo';
}