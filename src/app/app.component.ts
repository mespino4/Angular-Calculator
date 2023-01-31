import { KeyValuePipe } from '@angular/common';
import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Calculator';

  displayNumber: string = '0';
  isFuncClick: boolean = false;

  resultDisplay: string = '';
  equalReset: boolean = false;

  onClickValue (val: string, type: any){
    if(type == 'number')
      this.onNumberClick(val);
    else if(type == 'function')
      this.onFunctionClick(val)
    
    if(!this.isFuncClick)
      this.resultDisplay = eval(this.displayNumber);
  }

  onNumberClick(val: string){
    if(this.displayNumber == '0' || this.equalReset){
      this.displayNumber = val;
      this.equalReset = false;
    }
    else
      this.displayNumber += val;

    this.isFuncClick = false;
  }

  onFunctionClick(val: string){
    this.isFuncClick = true;
    this.equalReset = false;

    if(val == 'c')
      this.clearAll();
    else if(val == '=')
      this.onEqualPress();

    if(val == '=' || val == 'c')
      null
    else
      this.displayNumber += val;
  }

  onEqualPress(){
    this.equalReset = true;

    this.displayNumber = this.resultDisplay.toString();
    this.resultDisplay = '';
  }

  clearAll(){
    this.resultDisplay = '';
    this.displayNumber = '0';
  }

}