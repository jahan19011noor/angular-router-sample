import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
// import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'heroes', component: HeroListComponent },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: true,
      preloadingStrategy: SelectivePreloadingStrategyService
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
