import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding-input',
  templateUrl: './data-biding-input.component.html',
  styleUrls: ['./data-biding-input.component.scss']
})
export class DataBidingInputComponent implements OnInit {

  username='';
  cleartext(){
    this.username='';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
