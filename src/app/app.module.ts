import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModuleComponent } from './module/module.component';
import { AboutauthourComponent } from './aboutauthour/aboutauthour.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateproblemComponent } from './updateproblem/updateproblem.component';
import { FormsModule } from '@angular/forms';
import { DeleteproblemComponent } from './deleteproblem/deleteproblem.component';
import { HeadercompaniesComponent } from './headercompanies/headercompanies.component';
import { CodemirrorModule } from 'ng2-codemirror';
import 'codemirror';
import { EventEmitterService } from './event-emitter.service';
import { Top10programmesComponent } from './top10programmes/top10programmes.component';
import { AboutmeComponent } from './aboutme/aboutme.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModuleComponent,
    AboutauthourComponent,
    UpdateproblemComponent,
    DeleteproblemComponent,
    HeadercompaniesComponent,
    Top10programmesComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
