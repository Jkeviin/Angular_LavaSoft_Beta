import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PfaqComponent } from './paginas/pfaq/pfaq.component';

// Componentes
import { PrincipalComponent } from './paginas/principal/principal.component';;

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent  },
  { path: 'faq', component: PfaqComponent  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
