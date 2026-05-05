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

    // About Me Section
    'about.title': { EN: 'About me', DE: 'Über mich' },
    'about.description': {
      EN: "Hi, I'm a german speaking Frontend Developer living in Wuppertal. Motivated by the limitless opportunities within IT, I am excited about crafting visually captivating and intuitive websites and applications.",
      DE: 'Hallo, ich bin ein deutschsprachiger Frontend Entwickler aus Wuppertal. Motiviert durch die grenzenlosen Möglichkeiten in der IT, bin ich begeistert davon, visuell fesselnde und intuitive Websites und Anwendungen zu entwickeln.',
    },
    'about.flexible_work': {
      EN: 'Flexible in terms of working environments, I can work effectively both on-site in Wuppertal and remotely.',
      DE: 'Flexibel in Bezug auf Arbeitsumgebungen kann ich sowohl vor Ort in Wuppertal als auch remote effektiv arbeiten.',
    },
    'about.open_minded': {
      EN: 'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.',
      DE: 'Ich bin aufgeschlossen und suche immer nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten ständig zu verbessern.',
    },
    'about.problem_solving': {
      EN: "In my profession, programming isn't just about writing code; it's a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.",
      DE: 'In meinem Beruf geht es beim Programmieren nicht nur um das Schreiben von Code; es ist eine kreative Form der Problemlösung. Ich bin stolz auf meine Fähigkeit, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu destillieren. Auf diese Weise helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.',
    },

    // Skills Section
    'skills.title': { EN: 'My Skills', DE: 'Meine Fähigkeiten' },

    // Portfolio Section
    'portfolio.title': { EN: 'My Projects', DE: 'Meine Projekte' },

    // Contact Section
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
