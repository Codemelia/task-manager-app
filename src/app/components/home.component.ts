import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task-model';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  taskService = inject(TaskService)

  // get tasks array
  tasks: Task[] = this.taskService.getTasks()

}
