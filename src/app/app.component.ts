import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'working...';
  filterValue = '';

  ninja = {
      name: 'Vanja',
      belt: 'Red'
  };

  updateValue(value) {
    this.filterValue = value;
    // console.log(this.filterValue, 'is updated!');
  }
}
