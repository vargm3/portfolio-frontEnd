import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Camera, Github, Linkedin } from 'angular-feather/icons';


const icons = {
  Camera,
  Github,
  Linkedin
};

@NgModule({
  imports: [
    FeatherModule.pick({ Camera, Github, Linkedin })
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
