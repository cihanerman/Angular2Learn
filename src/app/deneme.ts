import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
    selector: "deneme",
    template: `
    <h3>Tam Adı:{{strName}} {{strSurName}}</h3>
     Adınız: <input type="text" [(ngModel)]="strName"/>
     Soyadınız: <input type="text"[(ngModel)]="strSurName" (keypress)="OnlyNumber($event)" />
     <button (click)="WriteFullName()" >Gönder</button>  
    `
})

export class deneme implements OnInit {
    @Input("personData") personData;
    @Output("ShowName") ShowName = new EventEmitter();
    strName: string;
    strSurName: string;

    ngOnInit() {
        this.strName = this.personData.name;
        this.strSurName = this.personData.surname;
    }

    constructor() {

    }

    public checkMail(mail) {
        console.log(mail);
    }

    public OnlyNumber($event) {
        if ($event.charCode >= 49 && $event.charCode <= 57) {
            return false;
        }
    }

    public WriteFullName() {
        this.ShowName.next(this.personData);
    }
}