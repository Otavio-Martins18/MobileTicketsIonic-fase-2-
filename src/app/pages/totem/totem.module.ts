import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotemPage } from './totem.page';

const routes: Routes = [{ path: '', component: TotemPage }];

@NgModule({
  imports: [TotemPage, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotemPageModule {}
