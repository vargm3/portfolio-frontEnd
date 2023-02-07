import { Component } from '@angular/core';
import { faRobot, faDatabase } from '@fortawesome/free-solid-svg-icons'; 
import { faHtml5, faCss3Alt, faBootstrap, faSquareJs, faAngular, faJava, faDocker, faLinux } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  iconList = [{ name: 'Tecnologías y habilidades', icon: faRobot }];

  skillList = [
    { name: 'frontend', tecnologies: "" },
    { name: 'backend', tecnologies: "" }
  ]



  showSkills() {

}


}




