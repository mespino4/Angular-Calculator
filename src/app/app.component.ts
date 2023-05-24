import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Calculator';

  displayNumber: string = '0';
  hidderNumber: string = '0';
  isFuncClick: boolean = false;
  isNumberClick: boolean = false

  resultDisplay: string = '';
  equalReset: boolean = false;

  onClickValue (val: string, type: any){ //when you press any button
    if(type == 'number'){
      this.onNumberClick(val);
    }
    else if(type == 'function'){

      this.onFunctionClick(val)
    }

    if(!this.isFuncClick)                           //if a funciton was not clicked
      this.resultDisplay = eval(this.displayNumber);//evaluate the number that was displayed
  }

  onNumberClick(val: string){
    this.isNumberClick = true;
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
    this.isNumberClick = false;
    this.isFuncClick = true;
    this.equalReset = false;

    if(val == 'ac')
      this.clearAll();
    else if(val == '=')
      this.onEqualPress();

    if(val == '=' || val == 'ac')
      null
    else if(!this.isFunctionValid(this.displayNumber))
      null
    else
      this.displayNumber += val;
      
    /*
    if(val == '=' || val == 'ac')
      null
    else
      this.displayNumber += val;
    */
    
  }
  
  multiplyButton(){
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

  
  isFunctionValid(str: string): boolean {
    const lastChar = str.charAt(str.length - 1);
    if(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/' ||
      lastChar == '%' || lastChar == '<' || lastChar == '.' )
      return false
    else
      return true
  }
  
}