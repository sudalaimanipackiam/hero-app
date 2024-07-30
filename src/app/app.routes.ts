import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SweetsComponent } from './sweets/sweets.component';
import { SavouriesComponent } from './savouries/savouries.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'sweet', component: SweetsComponent },
    { path: 'savouries', component: SavouriesComponent },
];
