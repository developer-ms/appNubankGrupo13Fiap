import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'conta-corrente', loadChildren: () => import('./conta-corrente/conta-corrente.module').then( m => m.ContaCorrentePageModule)},
  { path: 'credito-facil', loadChildren: () => import('./credito-facil/credito-facil.module').then( m => m.CreditoFacilPageModule)},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
