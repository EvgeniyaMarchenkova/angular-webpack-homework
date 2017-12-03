import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit{
  private findCourseValue: string;

  ngOnInit() {
    this.findCourseValue = '';
  }

  constructor() {}

  writeConsole() {
    console.log(this.findCourseValue);
  }
}
