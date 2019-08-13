import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() PData: number;
  @Output() childEvent = new EventEmitter();
  constructor() { }

  onChange(value) {
    this.childEvent.emit(value);
  }
  public CData: number;
  ngOnInit() {
  }

}
