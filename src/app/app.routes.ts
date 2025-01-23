import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'services',
        component: ServiceComponent
    },
    {
        path: 'test',
        component: HeaderComponent
    }
    ,
    { path: '', redirectTo: '/test', pathMatch: 'full' }
]
