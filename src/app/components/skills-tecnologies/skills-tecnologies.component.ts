import { Component, Input  } from '@angular/core';


@Component({
  selector: 'app-skills-tecnologies',
  templateUrl: './skills-tecnologies.component.html',
  styleUrls: ['./skills-tecnologies.component.css']
})
export class SkillsTecnologiesComponent {

  @Input() skills: any;
  @Input() activeTabId: any;


}
