import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styles: []
})
export class AppComponent {
  title = 'demo';

  public name: string;
  public id: number;
  public salary: number;
  public department: string;
  public rows: Array<{name:string,id: number, salary: number, department: string}> = [];

  buttonClicked() {
    this.rows.push( {name: this.name,id: this.id, salary:this.salary, department:this.department } );

    //if you want to clear input
    this.name = null;
    this.id = null;
    this.salary = null;
    this.department = null;
  }
}


