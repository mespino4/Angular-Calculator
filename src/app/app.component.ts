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

  /*This method is called whenever any button is clicked, it receives the value as a string and
  the type of button that was pressed(wether number or operator)*/
  onClickValue (val: string, type: any){
    if(type == 'number'){
      this.onNumberClick(val);
    }
    else if(type == 'function'){
      this.onFunctionClick(val)
    }

    if(!this.isFuncClick)                                                   //if a funciton was not clicked
      this.resultDisplay = eval(this.displayNumber);                        //evaluate the string on screen
  }

  /*This method is called whenver a number button is clicked*/
  onNumberClick(val: string){
    if(this.displayNumber == '0' || this.equalReset){                       //if the number is 0
      this.displayNumber = val;                                             //add number to display string
      this.equalReset = false;
    }else
      this.displayNumber += val;                                            //add the number to the display string
    
    this.isFuncClick = false;
  }

  /*This method is called whenver a function type button is clicked*/
  onFunctionClick(val: string){
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
  }

  /*This method is called whenver a function type button is clicked*/
  backspaceButton(){}

  /*This method is called whenver the "=" button is pressed*/
  onEqualPress(){
    this.equalReset = true;

    this.displayNumber = this.resultDisplay.toString();
    this.resultDisplay = '';
  }

  /*This method is called whenver the "AC" button is pressed*/
  clearAll(){
    this.resultDisplay = '';
    this.displayNumber = '0';
  }

  /*This method checks the last character in the string that is given to oit is a number or not*/
  isLastCharNumber(str: string): boolean {
    const lastChar = str.charAt(str.length - 1);
    return !isNaN(Number(lastChar));
  }
  
  /*This method checks if the string given to it has a function type value as its last character.
  This methord is used to avoid the user adding 2 operator buttons on the display screen ex. 1++1*/
  isFunctionValid(str: string): boolean {
    const lastChar = str.charAt(str.length - 1);
    if(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/' ||
      lastChar == '%' || lastChar == '<' || lastChar == '.' )
      return false
    else
      return true
  }
}