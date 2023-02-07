import { Component } from '@angular/core';
import { faMugHot } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  iconList = [{ name: "Sobre mí", icon: faMugHot }];

 
}
