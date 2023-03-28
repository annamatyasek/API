import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { TodoInterface } from '../../types/todo.interface';
import { Dicionary } from '../../types/todo.interface';
import { PrimeNGConfig } from 'primeng/api';
import { tap } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
    `
      :host ::ng-deep button {
        margin-right: 0.5em;
      }
    `,
  ],
  styleUrls: ['./todo.component.scss', '../../../app.component.scss'],
})
export class TodoComponent implements OnInit {
  taskForm!: FormGroup;
  todoList: Dicionary[] = [];
  selectedTodo!: Dicionary;
  id!: number;
  router: any;
  description: TodoInterface[] = [];
  isVisible: boolean = true;
  taskEdited!: Dicionary;
  consoleLog() {
    console.log('cos');
    console.log(this.todoList);
  }

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.loadTasks();
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.primengConfig.ripple = true;
    this.httpService.getTasks();
  }

  deleteTasks(id: string) {
    this.httpService.deleteTasks(id).subscribe(() => this.loadTasks());
  }

  loadTasks() {
    this.httpService
      .getTasks()
      .pipe(
        tap((tasks) => {
          this.todoList = tasks;
        })
      )
      .subscribe();
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
