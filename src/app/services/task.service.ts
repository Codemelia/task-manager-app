import { Injectable } from '@angular/core';
import { Task } from '../models/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // new tasks array
  private tasks: Task[] = []

  // getter for tasks array
  getTasks(): Task[] {
    return this.tasks
  }

  // add task to tasks array
  addTask(task: Task) {
    this.tasks.push(task)
  }

  // get task by id
  // if no task is found, return undefined
  getTaskById(id: number): Task | undefined {
    // access every task and match task id to id by value + type (===)
    return this.tasks.find(task => task.id === id)
  }

  // update task
  updateTask(updatedTask: Task) {
    // access every task
    // if task id match updated task id, replace task with updatedTask
    this.tasks = this.tasks.map(
      task =>
        task.id === updatedTask.id ? updatedTask : task
    )
  }

  // delete task
  // filter tasks array to only include task that does not match id
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

}
