import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PanelGenericoComponent } from './components/panel-generico/panel-generico.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  // { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: '', component: PanelGenericoComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirige a 'dashboard' si la ruta es vacía
      { path: 'dashboard', component: DashboardComponent },
      { path: 'newPage', component: PageOneComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
