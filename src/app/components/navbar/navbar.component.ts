import { Component } from '@angular/core';
import { faStream, faHome, faMugHot, faGlasses, faLaptopCode, faPaperPlane } from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  faStream = faStream;  

  navList = [
    { name: "Inicio", icon: faHome, hover: false },
    { name: "Sobre mí", icon: faMugHot, hover: false },
    { name: "Experiencia", icon: faLaptopCode, hover: false },
    { name: "Educación", icon: faGlasses, hover: false },
    { name: "Contacto", icon: faPaperPlane, hover: false },
  ];
  

  hovered(index: number) {
    this.navList.forEach((nav, i) => {
    nav.hover = i === index;
    });
  }

  nothovered(index: number) {
    this.navList.forEach((nav, i) => {
      nav.hover = false;
      });
  }

  iconTransform(navHover: boolean): string {
    return navHover ? 'grow-3 rotate-3' : 'grow-0 rotate-0';
  }


}
