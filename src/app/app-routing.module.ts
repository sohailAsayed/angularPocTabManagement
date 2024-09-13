import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './Components/child1/child1.component';
import { Child2Component } from './Components/child2/child2.component';
import { Child3Component } from './Components/child3/child3.component';

const routes: Routes = [
  {
    path: 'poc',
    loadChildren: () =>
      import('./pocr/poc-routing/poc-routing.module').then(
        (m) => m.PocRoutingModule
      ),
  },
  {
    path: 'demo',
    loadComponent: () =>
      import('../app/Components/demo1/demo1.component').then(
        (m) => m.Demo1Component
      ),
    children: [
      { path: '', component: Child1Component },
      { path: 'child2', component: Child2Component },
      { path: 'child3', component: Child3Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
