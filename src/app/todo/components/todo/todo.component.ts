import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { tap } from 'rxjs';
import { HttpService } from '../../services/http.service';

import { TodoInterface } from '../../types/todo.interface';
import { Dicionary } from '../../types/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  taskForm!: FormGroup;
  todoList: TodoInterface[] = [];
  todos$ = this.httpService.getTasks();
  id!: number;
  router: any;
  description: TodoInterface[] = [];
  isVisible: boolean = true;
  taskEdited!: Dicionary;

  constructor(private httpService: HttpService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadTasks();
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  deleteTasks(id: string) {
    this.httpService.deleteTasks(id).subscribe(() => this.loadTasks());
  }

  loadTasks() {
    // console.log('1loadTasks', this.todos$);
    // this.todos$ = this.httpService.getTasks();
    // console.log('2loadTasks', this.todos$);
  }
  hideList(todo: Dicionary) {
    this.taskEdited = todo;
    this.isVisible = false;
  }

  updateTask() {
    const updatedTask: Dicionary = this.taskForm.value;
    this.httpService.updatePost(updatedTask, this.taskEdited._id).subscribe();
  }
}
