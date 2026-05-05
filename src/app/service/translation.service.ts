import { Injectable, signal, computed } from '@angular/core';

export type Language = 'DE' | 'EN';

export interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLanguage = signal<Language>('DE');
  public currentLang = this.currentLanguage.asReadonly();

  // Erstelle ein Signal für jede Übersetzung
  private translationMap = signal<Map<string, string>>(new Map());

  // Öffentliches Signal für Übersetzungsänderungen
  public translationsVersion = signal<number>(0);

  private translations: Translations = {
    'nav.about': { EN: 'About me', DE: 'Über mich' },
    'nav.skills': { EN: 'Skills', DE: 'Fähigkeiten' },
    'nav.portfolio': { EN: 'Portfolio', DE: 'Portfolio' },
    'nav.contact': { EN: 'Contact', DE: 'Kontakt' },
    'home.title': { EN: 'Welcome to my Portfolio', DE: 'Willkommen bei meinem Portfolio' },
    'home.subtitle': { EN: 'Frontend Developer', DE: 'Frontend Entwickler' },
    'about.title': { EN: 'About me', DE: 'Über mich' },
    'about.description': {
      EN: 'I am a passionate frontend developer...',
      DE: 'Ich bin ein leidenschaftlicher Frontend Entwickler...',
    },
    'skills.title': { EN: 'My Skills', DE: 'Meine Fähigkeiten' },
    'portfolio.title': { EN: 'My Projects', DE: 'Meine Projekte' },
    'contact.title': { EN: 'Contact me', DE: 'Kontaktieren Sie mich' },
    'contact.name': { EN: 'Name', DE: 'Name' },
    'contact.email': { EN: 'Email', DE: 'E-Mail' },
    'contact.message': { EN: 'Message', DE: 'Nachricht' },
    'contact.send': { EN: 'Send', DE: 'Senden' },
    'footer.legal': { EN: 'Legal Notice', DE: 'Impressum' },
    'footer.privacy': { EN: 'Privacy Policy', DE: 'Datenschutz' },
    'lang.de': { EN: 'German', DE: 'Deutsch' },
    'lang.en': { EN: 'English', DE: 'Englisch' },
  };

  constructor() {
    const savedLang = localStorage.getItem('preferredLanguage') as Language;
    if (savedLang && ['DE', 'EN'].includes(savedLang)) {
      this.setLanguage(savedLang);
    } else {
      this.updateTranslations();
    }
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang.toLowerCase();
    this.updateTranslations();
  }

  private updateTranslations(): void {
    const newMap = new Map<string, string>();
    const currentLang = this.currentLanguage();

    for (const [key, value] of Object.entries(this.translations)) {
      newMap.set(key, value[currentLang] || value['EN'] || key);
    }

    this.translationMap.set(newMap);
    // Version erhöhen, um alle Pipes zu triggern
    this.translationsVersion.update((v) => v + 1);
  }

  translate(key: string): string {
    return this.translationMap().get(key) || key;
  }
}
