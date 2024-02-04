import { Component } from '@angular/core';
import { NumberOnly } from './numberonly';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `<input id="box" type="text" NumberOnly>`
 })
 class HostComponent {}


describe('NumberDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let searchBox: HTMLInputElement;
 
  beforeEach(() => {
     TestBed.configureTestingModule({
       declarations: [NumberOnly, HostComponent]
     });
 
     fixture = TestBed.createComponent(HostComponent);
     searchBox=fixture.debugElement.nativeElement.querySelector('#box');
  });


  it('should create an instance', () => {
    const directive = new NumberOnly();
    expect(directive).toBeTruthy();
  });
  
  it('should prevent non numeric keys', () => {
     const event = new KeyboardEvent('keydown', { key: 'a' , cancelable: true},);
     searchBox.dispatchEvent(event);
     fixture.detectChanges();
     expect(event.defaultPrevented).toBeTruthy();
  });
 
  it('should allow numeric keys', () => {
     const event = new KeyboardEvent('keydown', { key: '1',cancelable: true });
     searchBox.dispatchEvent(event);
     fixture.detectChanges();
     expect(event.defaultPrevented).toBeFalsy();
  });
 
  it('should allow Backspace', () => {
     const event = new KeyboardEvent('keydown', { key: 'Backspace',cancelable: true });
     searchBox.dispatchEvent(event);
     fixture.detectChanges();
     expect(event.defaultPrevented).toBeFalsy();
  });







});
