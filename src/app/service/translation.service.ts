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
    'nav.about': { DE: 'Über mich', EN: 'About me' },
    'nav.skills': { DE: 'Fähigkeiten', EN: 'Skills' },
    'nav.portfolio': { DE: 'Portfolio', EN: 'Portfolio' },
    'nav.contact': { DE: 'Kontakt', EN: 'Contact' },
    'home.title': { DE: 'Willkommen bei meinem Portfolio', EN: 'Welcome to my Portfolio' },
    'home.subtitle': { DE: 'Frontend Entwickler', EN: 'Frontend Developer' },
    'about.title': { DE: 'Über mich', EN: 'About me' },
    'about.description': {
      DE: 'Ich bin ein leidenschaftlicher Frontend Entwickler...',
      EN: 'I am a passionate frontend developer...',
    },
    'skills.title': { DE: 'Meine Fähigkeiten', EN: 'My Skills' },
    'portfolio.title': { DE: 'Meine Projekte', EN: 'My Projects' },
    'contact.title': { DE: 'Kontaktieren Sie mich', EN: 'Contact me' },
    'contact.name': { DE: 'Name', EN: 'Name' },
    'contact.email': { DE: 'E-Mail', EN: 'Email' },
    'contact.message': { DE: 'Nachricht', EN: 'Message' },
    'contact.send': { DE: 'Senden', EN: 'Send' },
    'footer.legal': { DE: 'Impressum', EN: 'Legal Notice' },
    'footer.privacy': { DE: 'Datenschutz', EN: 'Privacy Policy' },
    'lang.de': { DE: 'Deutsch', EN: 'German' },
    'lang.en': { DE: 'Englisch', EN: 'English' },
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
