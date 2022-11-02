import { Component, OnInit } from '@angular/core';
import { Todo } from '../classes/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  toDoArr: Todo[] = [
    {
      id: 1,
      task: 'Smacchiare i giaguari'
    },
    {
      id: 2,
      task: 'Pettinare le cavallette'
    },
    {
      id: 3,
      task: 'Asciugare gli scogli'
    },
    {
      id: 4,
      task: 'mettere la crema da barba nei Ringo'
    },
    {
      id: 5,
      task: 'Andare a riprendere chi è scappato nel bosco'
    },
  ]

  done: boolean = false;
  currentStyles: Record<string, string> = {};

  constructor() { }

  ngOnInit(): void {
  }
  deleteTask(ele: Todo) {
    let i = this.toDoArr.indexOf(ele)
    this.toDoArr.splice(i, 1)
  }
  taskDone() {
    this.currentStyles = {
      'text-decoration': this.done ? 'line-through' : 'none'
    }
  }
  setDone(ele: Todo) {
    this.done = !this.done
    this.taskDone()
  }

}
