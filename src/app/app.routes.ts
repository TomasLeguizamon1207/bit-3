import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { DetailsComponent } from './components/pages/flight-detail/flight-detail';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
    {path: 'home', component: Home, title:"Home"},
    {path: 'details', component: DetailsComponent, title:"Details"},
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'details/:icao', component: DetailsComponent},
    {path: '**', component: PageNotFound, title: 'PageNotFound'}
    
];
