import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './todo/components/add/add.component';
import { ListTodoComponent } from './todo/components/list-todo/list-todo.component';
import { TodoComponent } from './todo/components/todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
  },
  {
    path: 'todo/add',
    component: AddComponent,
  },
  {
    path: 'list-todo',
    component: ListTodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
