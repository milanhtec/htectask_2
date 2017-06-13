import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() searchValueUpdate = new EventEmitter<String>();
  constructor() { }


  ngOnInit() {
  }

  updateSearchValue(value: string) {
    // console.log('This is the value', value);
    this.searchValueUpdate.emit(value);
  }
}
