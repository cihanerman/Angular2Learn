import { Component } from "@angular/core";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
    selector:"deneme",
    template:`
        <input type="text" [ngClass]="{'blue':uygula}" (focus)="uygula=true" (focusout)="uygula=false"[(ngModel)]="newPeople" (keyup.enter)="ekle()" />
        <ul>
            <li  *ngFor="let isim of isimler; let i = index"><button (click)="sil(i)" >Sil</button>{{isim}}</li>
        </ul>
       <!-- <button class="{{myClass}}" (click)="event()">Click Me</button>{{deger3}}<br> 
        <button [class.red]="durum" (click)="event()">Click Me</button>{{deger3}}<br>
         <input type='text' placeholder="Doğru Sayısı" (keyup.enter)="goster()" [(ngModel)]="deger" />
         <span [hidden]="durum2">{{deger}}</span>
         <br>
         <input type="text" placeholder="Yanlış Sayısı" [(ngModel)]="deger2" />{{deger - (deger2/4)}} --> 
    `,
    styles:[`
        ul{
            background:yellow;
        }
        .blue{
            background:blue;
            color:white;
        }
        li{
            color:black;
            list-style:none;
        }    
    `]
})

export class deneme{
    isimler = ["cihan","fatma","aydın","erkan"];
    newPeople:string;
    uygula=false;
    sil(i){
        this.isimler.splice(i,1);// hem isimi hem de butonu siliyor
        //delete this.isimler[i]; sadece ismi siliyor
    }
    ekle(){
        this.isimler.push(this.newPeople);
        this.newPeople="";
    }
   // durum=false;
    //durum4:number;
    //myClass="";
    //deger3="Angular 2 ";
   // durum2=true;
//    goster(){
//        this.durum2=false;
//    }
    // event(){
    //     this.durum=!this.durum;
    //     //this.myClass="red";
    //     this.deger3 += "İlk Event";
    //     //alert("Angular2 İlk Event");
    // }
}