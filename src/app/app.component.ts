import { Component } from '@angular/core';
import { zip } from 'rxjs';
import { Address } from './address';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';

  address:Address = new Address(137, 'albatiya',"agra","uttar Pradesh",123456);
  user : User = new User("Devvrat","dev@gmail.com",9457655010,"","Chikorita",true,this.address);
}
