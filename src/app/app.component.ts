import { Component } from '@angular/core';
import { PersonService } from './PersonService';

@Component({
  selector: 'ilk-angular',
  templateUrl: "./app.component.html",
  styles: [`
    .completed{
      text-decoration:line-through;
    }
  `]
})
export class AppComponent {
  people = [];

  constructor(personService: PersonService) {
    this.people = personService.People;
  }

  PeopelList = [];
  SayMyName($event) {
    var people = { name: $event.name, surname: $event.surname, state: "completed" };
    if (!this.PeopelList.find(res => res.name == people.name)) {
      this.PeopelList.push(people);
    }
  }

  clearList() {
    this.PeopelList = [];
  }
}
