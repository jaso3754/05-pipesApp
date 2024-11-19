import { Component } from '@angular/core';
import { rejects } from 'assert';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
 // i18n Select

 public name: string = ' Jheison'
 public gender: 'male' | 'female' = 'male';

 public invitationMap = {
  male: 'invitarlo',
  female: 'invitarla'
 }

 changeClient ():void {
  this.name = 'Melissa';
  this.gender = 'female'
 }

 //i18plural

 public clients: string [] = ['Maria', 'Pedro','Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
 public clientMap = {
  '=0': 'no tenemos ningun cliente esperando.',
  '=1': 'tenemos un cliente esperando.',
  '=2': 'tenemos 2 clientes esperando.',
  'other': '#clientes esperando',
 }

 deleteClient():void {
  this.clients.shift();
 }

 //KeyValue Pipe

 public person = {
  name: 'jheison',
  age: 29,
  address: 'colombia - Manizales'
 }

 //Async Pipe
 public myObservableTimer = interval(2000).pipe(
  tap(value => console.log ('tap:', value))
 );

 public promiseValue: Promise<string> = new Promise ( ( resolve, rejects) => {
    setTimeout( () => {
      resolve ('Tenemos data en la promesa.')
    },3500);
 })

}
