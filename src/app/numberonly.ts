import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[NumberOnly]'
})
export class NumberOnly {

  constructor() { }
  @HostListener('keydown',['$event'])
  onKeyDown(event: KeyboardEvent){
    if(isNaN(Number(event.key)) && (event.key !== 'Backspace')){
      
      event.preventDefault();
    }
  }
  

}
