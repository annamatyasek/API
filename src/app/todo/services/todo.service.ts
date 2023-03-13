import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from '../types/todo.interface';

@Injectable()
export class TodoService {
  todo$ = new BehaviorSubject<TodoInterface[]>([]);

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,

      id: null,
      completed: false,
      tittle: '',
      description: '',
    };

    const updateTodo = [...this.todo$.getValue(), newTodo];
    this.todo$.next(updateTodo);
  }
  removeTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      id: null,
      completed: false,
      tittle: '',
      description: '',
    };
    const updateTodo = [...this.todo$.getValue(), newTodo];
    this.todo$.next(updateTodo);
  }
}
