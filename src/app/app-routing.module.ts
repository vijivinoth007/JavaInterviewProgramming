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
import { ArraysandstringComponent } from './arraysandstring/arraysandstring.component';
import { DesignComponent } from './design/design.component';
import { ListsComponent } from './lists/lists.component';
import { TreesandgraphComponent } from './treesandgraph/treesandgraph.component';
import { SortingandsearchingComponent } from './sortingandsearching/sortingandsearching.component';
import { RecursionComponent } from './recursion/recursion.component';
import { DynamicproblemsComponent } from './dynamicproblems/dynamicproblems.component';
import { UniqueComponent } from './unique/unique.component';
import { DatastructureimplComponent } from './datastructureimpl/datastructureimpl.component';
import { SortingalgoComponent } from './sortingalgo/sortingalgo.component';

const routes: Routes = [
  { path :'update', component : UpdateproblemComponent},
  {path :'delete',component :DeleteproblemComponent},
  {path :'headercompanies',component:HeadercompaniesComponent},
  {path :'top10JavaInterviewPrograms' ,component :Top10programmesComponent},
  {path :'privacypolicy' ,component :PrivacypolicyComponent},
  {path :'about' ,component :AboutmeComponent},
  {path :'arraysandstring' ,component :ArraysandstringComponent},
  {path :'design' ,component :DesignComponent},
  {path :'lists' ,component :ListsComponent},
  {path :'treesandgraph' ,component :TreesandgraphComponent},
  {path :'sortingandsearching' ,component :SortingandsearchingComponent},
  {path :'recursion' ,component :RecursionComponent},
  {path :'dynamicproblems' ,component :DynamicproblemsComponent},
  {path :'uniqueemailaddress' ,component :UniqueComponent},
  {path :'datastructure',component :DatastructureimplComponent},
  {path :'sortingalgorithm',component :SortingalgoComponent},
  { path :'', component : ModuleComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
