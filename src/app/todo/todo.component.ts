import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

taskv="" ;
  tasks=["test"] ;

  rempTask()
  {
    this.tasks.push(this.taskv) ;
  }
  onDelete(index:number)
  {
    this.tasks.splice(index,1) ;
  }
}
