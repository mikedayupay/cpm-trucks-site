import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'] 
})
export class ButtonComponent{

  isClicked: string = "you should click on button";
  value: number = 0;
  
  clickMe(event: any) {
    //event.srcElement.classList.add("loading");
    event.target.classList.add("loading");

    setTimeout(() => {
      event.target.classList.remove("loading");
      this.isClicked = "Excellent, it works!";
    }, 2000);
  }

  onClick(event: any) {

    this.value++;
    
  }
}
