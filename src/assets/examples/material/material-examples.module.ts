import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_EXAMPLE_COMPONENT_LIST } from '.';

@NgModule({
  declarations: [...MATERIAL_EXAMPLE_COMPONENT_LIST],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [...MATERIAL_EXAMPLE_COMPONENT_LIST],
  entryComponents: [...MATERIAL_EXAMPLE_COMPONENT_LIST]
})
export class MaterialExamplesModule { }
