import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss']
})
export class StringComponent implements OnInit {
  string: string = '';
  stringLength: number = 5;
  isRed: boolean = false;
  isBlue: boolean = false;

  constructor() {}

  ngOnInit(): void {
    interval(3000).subscribe(()=>{
      this.string = '';
      this.randomString(this.stringLength);
      this.stringStyle();
      console.log(this.string)
    })
  }
  randomString(length: number): void{
    let randomChars: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let stringGenerated: string = '';
    for (let i = 0; i < length; i++) {
      stringGenerated += randomChars.charAt(Math.floor(Math.random()*randomChars.length))
    }
    this.string = stringGenerated;
  }
  stringStyle():void{
    let isNumber = /^\d+$/.test(this.string);
    let isPalindrome = this.string == this.string.split('').reverse().join('');
    if(isNumber){
      this.isBlue = true;
    } else if (isPalindrome){
      this.isRed = true;
    } else {
      this.isRed = false;
      this.isBlue = false;
    }
  }
}



