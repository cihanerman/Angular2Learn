import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {
    private _people = [];

    get People() {
        return this._people;
    }


    set People(allPerson) {
        this._people = allPerson;
    }

    constructor() {
        this._people = [
            { name: "Cihan", surname: "Erman" },
            { name: "Fatma", surname: "Erman" },
            { name: "Aysın", surname: "Erman" },
            { name: "Erkan", surname: "Erman" },
            { name: "Hiçkimse", surname: "Erman" }
        ]
    }
}