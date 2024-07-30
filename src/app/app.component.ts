import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { SweetsComponent } from './sweets/sweets.component';
import { SavouriesComponent } from './savouries/savouries.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SweetsComponent,SavouriesComponent,HeaderComponent,FooterComponent,AboutComponent,CommonModule,RouterLink,RouterLinkActive,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hero-app';
}
