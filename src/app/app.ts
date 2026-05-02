import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ScrollService } from './service/scroll-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
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
