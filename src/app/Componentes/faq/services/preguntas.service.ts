import { Injectable } from '@angular/core';
import { Preguntas } from '../models/preguntas.model';

@Injectable({
  providedIn: 'root'
})

export class PreguntasService {

  constructor() { }

  preguntas: Preguntas[] = [
    {
      pregunta: '¿Pregunta numero 1?',
      respuesta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum elit tortor, ut rutrum ante gravida eget. Duis eu ipsum nec diam aliquam finibus et dictum elit. Donec vestibulum dictum ex, vitae sagittis eros dapibus eleifend. Nullam eget sem in est lacinia volutpat. Phasellus ac suscipit nisi. Suspendisse nibh elit',
      abierto: false,
      toggle: function() {
        this.abierto = !this.abierto;
      }
    },
    {
      pregunta: '¿Pregunta numero 2?',
      respuesta: 'Consectetur id nisl ac, suscipit pulvinar augue. Praesent aliquet felis at imperdiet euismod. Nulla id lectus sodales, rhoncus felis rutrum, interdum mi. In nibh velit, venenatis ac diam vitae, suscipit elementum augue. Maecenas auctor semper imperdiet. Integer tempor vitae eros id sodales',
      abierto: false,
      toggle: function() {
        this.abierto = !this.abierto;
      }
    },
    {
      pregunta: '¿Pregunta numero 3?',
      respuesta: 'Curabitur tincidunt justo eget felis cursus pulvinar. Nam ac tempus lectus, sed feugiat justo. Fusce viverra, magna id consequat facilisis, lacus urna tempus diam, sit amet aliquet metus mauris accumsan quam. Nullam luctus in dolor sed blandit',
      abierto: false,
      toggle: function() {
        this.abierto = !this.abierto;
      }
    }
  ];
}
