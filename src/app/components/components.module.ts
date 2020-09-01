import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';

import {FooterComponent} from '././footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';



@NgModule({
  declarations: [NavbarComponent,FooterComponent],
  imports: [CommonModule,MaterialModule],
  exports:[NavbarComponent,FooterComponent]
})
export class ComponentsModule { }
