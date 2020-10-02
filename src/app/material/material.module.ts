import { NgModule } from '@angular/core';
import {MatButtonModule, MatButtonToggleModule} from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

// import { FlexLayoutModule } from '@angular/flex-layout';


import {
  MatProgressSpinnerModule,

} from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule
]

@NgModule({
  
  imports: [
    MaterialComponents,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    // FlexLayoutModule

  ],
  
  exports: [
    MaterialComponents,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule
  ]
})
export class MaterialModule { 

}
