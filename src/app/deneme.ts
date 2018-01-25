import { Component } from "@angular/core";

@Component({
    selector:"deneme",
    template:`
       <!-- <button class="{{myClass}}" (click)="event()">Click Me</button>{{deger3}}<br> -->
        <button [class.red]="durum" (click)="event()">Click Me</button>{{deger3}}<br>
         <input type='text' placeholder="Doğru Sayısı" (keyup.enter)="goster()" [(ngModel)]="deger" />
         <span [hidden]="durum2">{{deger}}</span>
         <br>
         <input type="text" placeholder="Yanlış Sayısı" [(ngModel)]="deger2" />{{deger - (deger2/4)}}  
    `
})

export class deneme{
    durum=false;
    //durum4:number;
    //myClass="";
    deger3="Angular 2 ";
    durum2=true;
   goster(){
       this.durum2=false;
   }
    event(){
        this.durum=!this.durum;
        //this.myClass="red";
        this.deger3 += "İlk Event";
        //alert("Angular2 İlk Event");
    }
}