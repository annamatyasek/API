import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Dicionary } from '../../types/todo.interface';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {
  taskForm!: FormGroup;
  todoList: Dicionary[] = [];
  isVisible: boolean = true;
  taskEdited!: Dicionary;
  constructor(
    private readonly fb: FormBuilder,
    private readonly httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.loadTasks();
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.httpService.getTasks();
  }
  addTask() {
    const task: Dicionary = this.taskForm.value;
    this.httpService.addTask(task).subscribe();
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
