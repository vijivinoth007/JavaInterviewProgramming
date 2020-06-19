import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UpdateproblemComponent } from './updateproblem/updateproblem.component';
import { ModuleComponent } from './module/module.component';
import { DeleteproblemComponent } from './deleteproblem/deleteproblem.component';
import { HeadercompaniesComponent } from './headercompanies/headercompanies.component';
import { Top10programmesComponent } from './top10programmes/top10programmes.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

const routes: Routes = [
  { path :'update', component : UpdateproblemComponent},
  { path :'mainmenu', component : ModuleComponent},
  {path :'delete',component :DeleteproblemComponent},
  {path :'headercompanies',component:HeadercompaniesComponent},
  {path :'top10JavaInterviewPrograms' ,component :Top10programmesComponent},
  {path :'privacypolicy' ,component :PrivacypolicyComponent},
  { path: '' , component : AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
