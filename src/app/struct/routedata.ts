import { TRouteData } from './types';
import { HomeComponent } from '../views/home';
import { LoginComponent } from '../views/login';

export const RouteData: TRouteData[] = [
    {caption: 'Home', href: '', comp: HomeComponent, hideMenu: false},
    {caption: 'Login', href: 'login', comp: LoginComponent, hideMenu: true},
];
