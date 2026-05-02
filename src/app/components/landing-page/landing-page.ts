import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';
import { MySkills } from './my-skills/my-skills';
import { AboutMe } from './about-me/about-me';
import { Home } from './home/home';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, Home, AboutMe, MySkills, Portfolio, Contact],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
