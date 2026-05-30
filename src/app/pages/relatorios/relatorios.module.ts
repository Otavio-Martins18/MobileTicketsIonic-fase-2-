import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatoriosPage } from './relatorios.page';

const routes: Routes = [{ path: '', component: RelatoriosPage }];

@NgModule({
  imports: [RelatoriosPage, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelatoriosPageModule {}
