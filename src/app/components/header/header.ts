import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false;
  activeSection = '';

  hasUserScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.hasUserScrolled = true;
      this.checkActiveSection();
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollTo(section: string) {
    this.closeMenu();
    this.activeSection = section; // 🔥 sofort aktiv
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  checkActiveSection() {
    if (!this.hasUserScrolled) return;

    const sections = ['about-me', 'skills', 'portfolio'];

    for (let section of sections) {
      const el = document.getElementById(section);
      if (!el) continue;

      const rect = el.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        this.activeSection = section;
        break;
      }
    }
  }
}
