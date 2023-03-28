import { NgModule } from '@angular/core';
import { Routes, RouterModule, RoutesRecognized } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { TodoComponent } from './components/todo/todo.component';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [{ path: '', component: TodoComponent }];

@NgModule({
  declarations: [TodoComponent, AddComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
  ],
  providers: [HttpService],
})
export class TodoModule {}

import { ReactiveFormsModule } from '@angular/forms';
// import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
