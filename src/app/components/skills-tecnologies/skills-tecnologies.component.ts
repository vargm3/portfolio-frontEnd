import { Component } from '@angular/core';
import { faRobot, faDatabase } from '@fortawesome/free-solid-svg-icons'; 
import { faHtml5, faCss3Alt, faBootstrap, faSquareJs, faAngular, faJava, faDocker, faLinux } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-skills-tecnologies',
  templateUrl: './skills-tecnologies.component.html',
  styleUrls: ['./skills-tecnologies.component.css']
})
export class SkillsTecnologiesComponent {

  skillList = [
    { icon: faHtml5, tName: 'HTML', value: 85, level: 'Avanzado' },
    { icon: faCss3Alt, tName: 'CSS', value: 65, level: 'Intermedio' },
    { icon: faBootstrap, tName: 'Bootstrap', value: 65, level: 'Intermedio' },
    { icon: faSquareJs, tName: 'Javascript', value: 55, level: 'Intermedio' },
    { icon: faAngular, tName: 'Angular', value: 55, level: 'Intermedio' }
  ]

  getWidth(index: number) {
    return this.skillList[index].value + "%";
  }


}
