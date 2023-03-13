import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { tap } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { TodoService } from '../../services/todo.service';
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

  constructor(
    private todoService: TodoService,
    private httpService: HttpService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.todoService.todo$.subscribe(console.log);
    this.todoService.todo$
      .pipe(
        tap((response) => {
          this.todoList = response;
        })
      )
      .subscribe();
    this.loadTasks();
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  deleteTasks(id: string) {
    this.httpService.deleteTasks(id).subscribe(() => this.loadTasks());
  }
  // updateTasks(id: string) {
  //   this.httpService.updateTasks(id).subscribe();
  // }
  loadTasks() {
    this.todos$ = this.httpService.getTasks();
  }
  hideList(todo: Dicionary) {
    this.taskEdited = todo;
    this.isVisible = false;
    console.log('hideList', this.taskEdited);
  }
  // addTodo() {
  //   console.log('addTodo', this.taskForm.value);
  //   this.todoService.addTodo(this.taskForm.get('task')?.value);

  updatePost() {
    console.log('updatePost ', this.taskEdited);
    const updatedTask: Dicionary = this.taskForm.value;
    this.httpService.updatePost(updatedTask, this.taskEdited._id).subscribe();
  }
}
