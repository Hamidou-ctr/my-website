import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { AboutMe } from './components/about-me/about-me';
import { MySkills } from './components/my-skills/my-skills';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { ScrollService } from './service/scroll-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Home, AboutMe, MySkills, Portfolio, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('my-website');

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.scrollService.hasUserScrolled = true;
      this.scrollService.checkActiveSection();
    });
  }
}
