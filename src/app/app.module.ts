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
import { PeticionEmpresaComponent } from './Componentes/peticion-empresa/peticion-empresa.component';

// Angular Translate (Dependencias)
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    PrincipalComponent,
    PfaqComponent,
    FaqComponent,
    PPeticionEmpresaComponent,
    PeticionEmpresaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    // Angular Translate
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}