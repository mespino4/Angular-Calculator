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

  isNextDisplayable: boolean = true;

  onClickValue (val: string, type: any){
    if(type == 'number'){
      this.onNumberClick(val);
      this.isNextDisplayable = true
    }
    else if(type == 'function'){
      this.onFunctionClick(val)
      this.isNextDisplayable = false
    }

    if(!this.isFuncClick)                           //if a funciton was not clicked
      this.resultDisplay = eval(this.displayNumber);
  }

  onNumberClick(val: string){
    if(this.displayNumber == '0' || this.equalReset){ //if the number is 0
      this.displayNumber = val;                       //add number to display string
      this.equalReset = false;
    }
    else{
      this.displayNumber += val;                      //add the number to the display string
    }

    this.isFuncClick = false;
  }

  onFunctionClick(val: string){
    this.isFuncClick = true;
    this.equalReset = false;

    if(val == 'ac')
      this.clearAll();
    else if(val == '=')
      this.onEqualPress();
      
    if(val == '=' || val == 'ac')
      null
    else
      this.displayNumber += val;
  }
  
  multiplyButton(){
    this.isNextDisplayable = false;
  }
  divisionButton(){}
  additionButton(){}
  subtractButton(){}
  backspaceButton(){}



  onEqualPress(){ //if equal button is pressed
    this.equalReset = true;

    this.displayNumber = this.resultDisplay.toString();
    this.resultDisplay = '';
  }

  clearAll(){
    this.resultDisplay = '';
    this.displayNumber = '0';
  }



  isLastCharNumber(str: string): boolean {
    const lastChar = str.charAt(str.length - 1);
    return !isNaN(Number(lastChar));
  }

  /*
  isFunctionValid(str: string): boolean {
    const lastChar = str.charAt(str.length - 1);
    if(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/' ||
      lastChar == '%' || lastChar == '<' || lastChar == '.' )
      return false
    else
      return true
  }
  */
}