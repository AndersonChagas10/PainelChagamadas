import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelChamadasPageComponent } from './painel-chamadas-page/painel-chamadas-page.component';


const routes: Routes = [
  {path: '', component: PainelChamadasPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
