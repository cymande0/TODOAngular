import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';

  tasksList: Array<string> = [];
  doneTasksList: Array<string> = [];

  add(task: string){
    this.tasksList.push(task);
    console.log(this.tasksList);
  }

  remove(task: string){
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

  done(task: string){
    this.doneTasksList.push(task);
    this.remove(task);
  }
}




