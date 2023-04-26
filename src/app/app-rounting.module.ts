import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppModule } from './app.module';
import { enviroment } from 'src/enviroments/enviroments';
import { AppRoutingModule } from './app-routing.module';


const route: Routes= [
{ path: 'home', component: HomeComponent} ,
{ path: 'nosotros', component: NosotrosComponent} ,
{ path: 'noticia', component: NoticiaComponent},
{ path:'contactanos', component: ContactanosComponent}, 


]






@NgModule({
  declarations: [
AppComponent,
NavbarComponent,
HomeComponent,
NoticiaComponent,
NosotrosComponent,
ContactanosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireStorageModule
  ],


  exports:[RouterModule]
})
export class AppRountingModule { }
