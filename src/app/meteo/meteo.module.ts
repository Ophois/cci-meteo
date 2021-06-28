import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoRoutingModule } from './meteo-routing.module';
import { MeteoComponent } from './pages/meteo/meteo.component';
import { ConfigComponent } from './pages/config/config.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { PrevisionsComponent } from './pages/previsions/previsions.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MeteoComponent,
    ConfigComponent,
    CreditsComponent,
    PrevisionsComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    MeteoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MeteoModule { }
