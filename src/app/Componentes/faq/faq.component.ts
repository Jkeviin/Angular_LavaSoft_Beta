import { Component, OnInit } from '@angular/core';
import { PreguntasService } from './services/preguntas.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  preguntas = this.preguntasService.preguntas;

  constructor(public preguntasService: PreguntasService){}

  ngOnInit(): void {
    console.log (this.preguntas);
  }

}
