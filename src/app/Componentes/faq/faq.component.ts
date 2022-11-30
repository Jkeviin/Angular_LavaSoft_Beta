import { Component, OnInit } from '@angular/core';
import { PreguntasService } from './services/preguntas.service';

// Animaciones
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  animations: [
    trigger('toggle', [
      /* No visible por *ngIf, luego animacion cuando aparezca */
      state('void', style ({
        height: 0,
        opacity: 0
      }))
      /* Animacion cuando se abre */
      ,transition(':enter', [
        animate('.09s ease-in-out', style({
          height: '*',
          opacity: 1
        }))
      ])
      /* Animacion cuando se cierra */
      ,transition(':leave', [
        animate('.09s ease-in-out', style({
          height: 0,
          opacity: 0
        }))
      ])
    ])
  ]
})
export class FaqComponent implements OnInit {

  preguntas = this.preguntasService.preguntas;

  constructor(public preguntasService: PreguntasService){}

  ngOnInit(): void {
    console.log (this.preguntas);
  }

}
