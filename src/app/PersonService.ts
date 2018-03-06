import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";


@Injectable()
export class PersonService {
    People: PersonModel[];

    getObservable(){
        return this.http.request("./app/data.json")
        .map((response: Response) => <PersonModel[]>response.json());
    }

    constructor(private http: Http) {
        // http.request("./app/data.json")
        //     .map((response: Response) => <PersonModel[]>response.json())
        //     .subscribe(response => this.People = response,
        //     err => console.log(err),
        //     () => console.log("OK"));
    }
}
export class PersonModel {

    constructor(name: string, surname: string) {

    }
}