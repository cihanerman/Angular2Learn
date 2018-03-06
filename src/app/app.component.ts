import { Component, OnInit } from '@angular/core';
import { deneme } from "./deneme";
import { PersonService } from './PersonService';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'ilk-angular',
  templateUrl: "./app.component.html",
  styles: [`
    .completed{
      text-decoration:line-through;
    }
  `]
})
export class AppComponent implements OnInit {
  people = [];
  observablePeople: Observable<PersonModel[]>;
  constructor(private personService: PersonService) {
    this.people = personService.People;
  }

  GetObservablePeople() {
    this.observablePeople = this.personService.getObservable();
  }

  PeopelList = [];
  SayMyName($event) {
    var people = { name: $event.name, surname: $event.surname, state: "completed" };
    if (!this.PeopelList.find(res => res.name == people.name)) {
      this.PeopelList.push(people);
    }
  }

  ngOnInit() {
    this.GetObservablePeople();
  }

  clearList() {
    this.PeopelList = [];
  }
}
export class PersonModel {

  constructor(name: string, surname: string) {

  }
}
