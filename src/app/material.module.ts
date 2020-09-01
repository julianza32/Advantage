import {NgModule} from '@angular/core'
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
    imports:[MatButtonModule,MatToolbarModule,MatIconModule,MatCardModule,MatExpansionModule],
    exports:[MatButtonModule,MatToolbarModule,MatIconModule,MatCardModule,MatExpansionModule]
}) 
export class MaterialModule{}