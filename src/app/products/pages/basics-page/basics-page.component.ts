import { Component } from '@angular/core';

@Component({
  selector: 'basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower:string = 'jheison';
  public nameUpper:string = 'jheison';
  public fullName:string = 'jHeIsSON fErNAndo';
  public customDate: Date = new Date();

}
