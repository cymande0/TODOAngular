import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  constructor() { }

  @Input()
  tasksList = [];

  @Output()
  emitDone = new EventEmitter<string>();

  @Output()
  emitRemove = new EventEmitter<string>();

  ngOnInit() {
  }

  remove(task: string): void {
    this.emitRemove.emit(task);
  }

  done(task: string): void{
    this.emitDone.emit(task);
  }

  getColor(): string {
    return this.tasksList.length < 5 ? 'green' : 'red';
  }

}
