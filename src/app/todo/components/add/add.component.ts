import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Dicionary } from '../../types/todo.interface';

@Component({
  selector: 'app-todo-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
  taskForm!: FormGroup;
  constructor(private fb: FormBuilder, private httpService: HttpService) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  addTask() {
    const task: Dicionary = this.taskForm.value;
    this.httpService.addTask(task).subscribe();
  }
}
