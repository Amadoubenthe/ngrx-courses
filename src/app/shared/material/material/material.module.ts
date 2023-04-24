import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [MatCardModule, MatInputModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: materialModules,
})
export class MaterialModule {}
