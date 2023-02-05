import { Component } from '@angular/core';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  enterIcon =  { icon: faRightToBracket, hover: false };

  showSimbol: boolean = false;
  showDiv: boolean = false;
  

  toggleSimbol() : boolean {
    return this.showSimbol = true;
  }

  toggleDiv() : boolean {
    return this.showDiv = true;
  }

  hovered(): boolean {
    return this.enterIcon.hover = true;    
  }

  nothovered(): boolean {
    return this.enterIcon.hover = false; 
  }

  iconTransform(enterIconHover: boolean): string {
    return enterIconHover ? 'grow-4 rotate-4' : 'grow-0 rotate-0';
  }


}
