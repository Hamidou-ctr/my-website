import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private activeSectionSubject = new BehaviorSubject<string>('');
  activeSection$ = this.activeSectionSubject.asObservable();

  hasUserScrolled = false;

  scrollTo(section: string) {
    this.setActiveSection(section); // 🔥 sofort aktiv
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  setActiveSection(section: string) {
    this.activeSectionSubject.next(section);
  }

  checkActiveSection() {
    if (!this.hasUserScrolled) return;

    const sections = ['about-me', 'skills', 'portfolio', 'contact'];

    for (let section of sections) {
      const el = document.getElementById(section);
      if (!el) continue;

      const rect = el.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        this.setActiveSection(section);
        break;
      }
    }
  }
}
