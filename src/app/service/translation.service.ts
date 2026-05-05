import { Injectable, signal } from '@angular/core';

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

  private translationMap = signal<Map<string, string>>(new Map());
  public translationsVersion = signal<number>(0);

  private translations: Translations = {
    // Navigation
    'nav.about': { EN: 'About me', DE: 'Über mich' },
    'nav.skills': { EN: 'Skills', DE: 'Fähigkeiten' },
    'nav.portfolio': { EN: 'Portfolio', DE: 'Portfolio' },
    'nav.contact': { EN: 'Contact', DE: 'Kontakt' },

    // Home Section
    'home.i_am': { EN: 'I am', DE: 'Ich bin' },
    'home.frontend_developer': { EN: 'FRONTEND DEVELOPER', DE: 'FRONTEND ENTWICKLER' },
    'home.lets_talk': { EN: "Let's talk!", DE: 'Lass uns reden!' },
    'home.scroll_down': { EN: 'Scroll down', DE: 'Nach unten' },

    // About Me
    'about.title': { EN: 'About me', DE: 'Über mich' },
    'about.description': {
      EN: 'I am a passionate frontend developer...',
      DE: 'Ich bin ein leidenschaftlicher Frontend Entwickler...',
    },

    // Skills
    'skills.title': { EN: 'My Skills', DE: 'Meine Fähigkeiten' },

    // Portfolio
    'portfolio.title': { EN: 'My Projects', DE: 'Meine Projekte' },

    // Contact
    'contact.title': { EN: 'Contact me', DE: 'Kontaktieren Sie mich' },
    'contact.name': { EN: 'Name', DE: 'Name' },
    'contact.email': { EN: 'Email', DE: 'E-Mail' },
    'contact.message': { EN: 'Message', DE: 'Nachricht' },
    'contact.send': { EN: 'Send', DE: 'Senden' },

    // Footer / Legal
    'footer.legal': { EN: 'Legal Notice', DE: 'Impressum' },
    'footer.privacy': { EN: 'Privacy Policy', DE: 'Datenschutz' },

    // Language names
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
    this.translationsVersion.update((v) => v + 1);
  }

  translate(key: string): string {
    return this.translationMap().get(key) || key;
  }
}
