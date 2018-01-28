import { Component } from '@angular/core';
import { PersonService } from './PersonService';

@Component({
  selector: 'ilk-angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people = [];

  constructor(personService: PersonService) {
    this.people = personService.People;
  }

  SayMyName($event) {
    console.log(`Name:${$event.name} Surname:${$event.surname}`);
  }
}
