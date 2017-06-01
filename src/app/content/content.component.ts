import { Component, OnInit, Input } from '@angular/core';

import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

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
