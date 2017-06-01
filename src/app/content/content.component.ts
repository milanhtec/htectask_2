import { Component, OnInit, Input } from '@angular/core';

//import {Http} from '@angular/http';

import { FilterPipe } from '../filter.pipe';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  data;

  //constructor(private http:Http) {
      //this.http.get('data/data.json')
               //.subscribe(res => this.data = res.json());
  //}


    headerTitle = "Welcome 1234567";
    inputName = "Radi jebo mu ja sve po spisku";
    myBoolean = true;

    alertMe(val) {
        alert(val);
    }

    @Input() ninja;


ninjas = [
    {name: "Milan", belt: "orange"},
    {name: "Ivan", belt: "springgreen"},
    {name: "Vanja", belt: "pink"},
]

    // ninja = {
    //     name: "Milan",
    //     belt: "Green"
    // };

  constructor() { }

  ngOnInit() {
  }

}
