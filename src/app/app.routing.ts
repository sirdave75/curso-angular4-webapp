import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import {ProductosListComponent} from './components/productos-list.component';
import {ProductoAddComponent} from './components/producto-add.component';


const appRoutes: Routes = [
    {path: '', component : HomeComponent},
    {path: 'home', component : HomeComponent},
    {path: 'productos', component : ProductosListComponent},
    {path: 'crear-producto', component : ProductoAddComponent},
    {path: '**', component : ErrorComponent}
];

export  const appRoutingProviders: any[] = []; //para cargar el array de rutas
export  const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //para cargar el array de rutas