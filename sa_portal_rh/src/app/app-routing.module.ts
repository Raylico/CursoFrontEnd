import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';
import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';
import { PainelCurriculosComponent } from './views/painel-curriculos/painel-curriculos.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"vagas",component: VagasComponent},
  {path:"curriculos",component: CurriculosComponent},
  {path:"painel-vagas", component: PainelVagasComponent},
  {path:"painel-curriculos", component: PainelCurriculosComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
