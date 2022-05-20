import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  age = 23;
  name = 'Angular ' + VERSION.major;
  emp = {
    name: 'Bindhu',
    age: 55,
    gender: 'F',
    location: 'Chennai',
    company: 'Paperinflames'
  };
  keys: Array<string> = [];
  showTable: boolean = false;
  changeBtn: boolean = true;
  ngOnInit() {
    this.keys = Object.keys(this.emp);
  }
  clicked() {
    let btn = document.getElementById('click-me');
    if (this.changeBtn) {
      this.changeBtn = false;
      btn.style.background = 'red';
      btn.style.color = 'white';
    } else {
      this.changeBtn = true;
      btn.style.background = 'white';
      btn.style.color = 'black';
    }
  }
}
