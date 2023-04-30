import { Component } from '@angular/core';
import {User} from "../../../lib/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';

  user: User = {
    name: "amir"
  }
}
