import { Routes } from '@angular/router';

import { DetalheComponent } from './../recanddes/detalhe/detalhe.component';
import { RecanddesComponent } from './../recanddes/recanddes.component';
import { EstatisticaComponent } from './../recanddes/estatistica/estatistica.component';


export const dashboardRoutes: Routes = [
    {path: '', component: EstatisticaComponent},
    {path: 'recanddes', component: RecanddesComponent},
    {path: 'detalhe', component: DetalheComponent}
];

