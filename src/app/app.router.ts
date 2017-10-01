import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { PageNotFoundComponent } from './pages/others/page-not-found/page-not-found.component';

export const router: Routes = [
  {path: '', redirectTo: 'page1', pathMatch: 'full'},
  {path: 'page1', component: Page1Component },
  {path: 'page2', component: Page2Component },
  {path: '**', component: PageNotFoundComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);