import { Component, OnInit, OnDestroy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../service/scroll-service';
import { TranslationService, Language } from '../../service/translation.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  isMenuOpen = false;
  activeSection = '';

  // Erstelle computed Signale für jede Übersetzung
  aboutText = computed(() => this.translationService.translate('nav.about'));
  skillsText = computed(() => this.translationService.translate('nav.skills'));
  portfolioText = computed(() => this.translationService.translate('nav.portfolio'));
  contactText = computed(() => this.translationService.translate('nav.contact'));

  private subscription!: Subscription;

  constructor(
    private scrollService: ScrollService,
    public translationService: TranslationService,
  ) {}

  ngOnInit() {
    this.subscription = this.scrollService.activeSection$.subscribe(
      (section) => (this.activeSection = section),
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollTo(section: string) {
    this.scrollService.scrollTo(section);
    this.closeMenu();
  }

  setLanguage(lang: Language) {
    this.translationService.setLanguage(lang);
  }
}
