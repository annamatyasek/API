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
export class TodoComponent {}
