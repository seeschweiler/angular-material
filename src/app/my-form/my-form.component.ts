import { Component, OnInit } from '@angular/core';

import { Address } from '../address';

@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  address = new Address();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert("Thanks for submitting! Data: " + JSON.stringify(this.address));
  }

}
