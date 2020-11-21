import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandIntComponent } from './components/rand-int/rand-int.component';
import { RandPeopleComponent } from './components/rand-people/rand-people.component';
const routes: Routes = [
  { path: 'home', component: RandIntComponent},
  { path: 'rand-people', component: RandPeopleComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
