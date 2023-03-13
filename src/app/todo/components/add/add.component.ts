import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Dicionary } from '../../types/todo.interface';

@Component({
  selector: 'app-todo-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
  taskForm!: FormGroup;
  constructor(
    private todoService: TodoService,
    private fb: FormBuilder,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  // addTodo() {
  //   console.log(this.taskForm.value);
  //   this.todoService.addTodo(this.taskForm.get('task')?.value);
  // }

  addPost() {
    console.log('addTodo', this.taskForm.value);
    const task: Dicionary = this.taskForm.value;
    this.httpService.addPost(task).subscribe();
  }
  // updateTasks() {
  //   const task: Dicionary = this.taskForm.value;
  //   this.httpService.updateTasks(task).subscribe();
  // }
}
