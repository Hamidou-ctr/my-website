import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { AboutMe } from './components/about-me/about-me';
import { MySkills } from './components/my-skills/my-skills';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Home, AboutMe, MySkills],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-website');
}
