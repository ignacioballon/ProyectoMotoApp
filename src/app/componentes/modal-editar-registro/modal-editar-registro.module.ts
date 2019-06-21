import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalEditarRegistroPage } from './modal-editar-registro.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditarRegistroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalEditarRegistroPage],
  exports: [ ModalEditarRegistroPage ]
})
export class ModalEditarRegistroPageModule {}