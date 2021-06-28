import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TplMeteoComponent } from './components/tpl-meteo/tpl-meteo.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [
    TplMeteoComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ TplMeteoComponent,
             IconsModule ]
})
export class SharedModule { }
