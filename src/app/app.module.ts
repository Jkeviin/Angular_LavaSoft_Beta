import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { MainComponent } from './Componentes/main/main.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { AppRoutingModule } from './app-routing.module';
import { PfaqComponent } from './paginas/pfaq/pfaq.component';
import { FaqComponent } from './Componentes/faq/faq.component';
import { PPeticionEmpresaComponent } from './paginas/p-peticion-empresa/p-peticion-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    PrincipalComponent,
    PfaqComponent,
    FaqComponent,
    PPeticionEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
