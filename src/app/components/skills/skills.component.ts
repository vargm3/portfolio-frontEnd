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

  skills = [
    { id: 1, title: 'Front-end', tecList: [
      { icon: faHtml5, tName: 'HTML', value: '85', level: 'Avanzado' },
      { icon: faCss3Alt, tName: 'CSS', value: '65', level: 'Intermedio' },
      { icon: faBootstrap, tName: 'Bootstrap', value: '65', level: 'Intermedio' },
      { icon: faSquareJs, tName: 'Javascript', value: '55', level: 'Intermedio' },
      { icon: faAngular, tName: 'Angular', value: '55', level: 'Intermedio' }
    ]},
    { id: 2, title: 'Back-end / DevOps', tecList: [
      { icon: faJava, tName: 'Java', value: '75', level: 'Intermedio' },
      { icon: faDatabase, tName: 'MySQL', value: '65', level: 'Intermedio' },
      { icon: faDocker, tName: 'Docker', value: '25', level: 'Básico' },
      { icon: faLinux, tName: 'Linux', value: '65', level: 'Intermedio' },
    ]},
    { id: 3, title: 'Habilidades blandas', tecList: [] }
  ];
  
  activeTabId = 1;

  changeActiveTab(id: number) {
    this.activeTabId = id;
  }

}




