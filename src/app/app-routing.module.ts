import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PfaqComponent } from './paginas/pfaq/pfaq.component';
import { PPeticionEmpresaComponent } from './paginas/p-peticion-empresa/p-peticion-empresa.component'

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent  },
  { path: 'faq', component: PfaqComponent  },
  { path: 'peticion-empresa', component: PPeticionEmpresaComponent },
  { path: '**', redirectTo: 'principal' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
