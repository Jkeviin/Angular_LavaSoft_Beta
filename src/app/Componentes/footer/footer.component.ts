import { Component, OnInit } from '@angular/core';

// Angular Translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  // Varible tipo string para guardar los diferentes lenguajes
  langs: string[] = [];

  // Variable que guarda el lenguaje del navegador
  navegador: string = ''!;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Agregar el lenguaje que tiene el navegador con condicionales
    localStorage.getItem('lang') == null
      ? (this.navegador = navigator.language.split('-')[0])
      : (this.navegador = localStorage.getItem('lang')!);

    // Seteamos en localStorage el lenguaje
    localStorage.setItem('lang', this.navegador);

    // Configuración por defecto es en ingles
    this.translate.setDefaultLang(this.navegador);

    // Usará la configuración en ingles.
    this.translate.use(this.navegador);

    // Decirle cuales son los idiomas que se están soportando
    this.translate.addLangs(['en', 'es']);

    // Guardar en la variable Langs los lenguajes
    this.langs = this.translate.getLangs();

    // Poner el Langs que este por defecto de primero en el arreglo
    this.langs.splice(this.langs.indexOf(this.navegador), 1); // Eliminar el lenguaje actual
    this.langs.unshift(this.navegador); // Agregar el lenguaje actual al inicio del arreglo
  }

  // Funcion que cambia lenguaje
  changeLang(lang: string) {
    // Cambiar el lenguaje
    this.translate.use(lang);

    // Guardamos el lenguaje en localStorage
    localStorage.setItem('lang', lang);
  }
}
