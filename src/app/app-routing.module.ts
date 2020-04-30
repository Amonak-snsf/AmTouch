import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhitePaperComponent } from './white-paper/white-paper.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
{ path: 'paper', component: WhitePaperComponent },
{ path: 'home', component: HomePageComponent },
{ path: 'welcome', component: WelcomePageComponent },
{ path: '**', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
     anchorScrolling: 'enabled'
   })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
