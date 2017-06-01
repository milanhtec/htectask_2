import {Http} from '@angular/http';

import { Component, OnInit, Input } from '@angular/core';


import { FilterPipe } from '../filter.pipe';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  Coll: JsonData.CarsCollection;

  constructor(private http:Http) {
      this.http.get('http://www.json-generator.com/api/json/get/bQJcQFdAGG?indent=4')
               .subscribe(res => this.Coll = res.json());
  }


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


  ngOnInit() {
  }

}

declare module JsonData {

    export interface Car {
        image2: string;
        speed: number;
        description: string;
        name: string;
        id: number;
    }

    export interface CarsCollection {
        data: Car[];
    }
}
