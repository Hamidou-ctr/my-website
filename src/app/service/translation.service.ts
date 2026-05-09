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
    'skills.title': { EN: 'My Skills', DE: 'Fähigkeiten' },
    'skills.continually_learning': { EN: 'Continually Learning', DE: 'Kontinuierliches Lernen' },
    'skills.description': {
      EN: 'Show that you have used a variety of front-end technologies in your projects.',
      DE: 'Zeigen Sie, dass Sie in Ihren Projekten eine Vielzahl von Frontend-Technologien eingesetzt haben.',
    },
    'skills.looking_for': {
      EN: 'Looking for',
      DE: ' Suche nach',
    },
    'skills.another_skill': {
      EN: 'another skill',
      DE: 'einer weiteren Fähigkeit',
    },
    'skills.enthusiasm': {
      EN: 'Reveal enthusiasm for learning new technologies and frameworks.',
      DE: 'Zeigen Sie Begeisterung für das Erlernen neuer Technologien und Frameworks.',
    },
    'skills.get_in_touch': {
      EN: 'Get in touch',
      DE: 'Kontakt aufnehmen',
    },

    // Portfolio Section
    'portfolio.title': { EN: 'Portfolio', DE: 'Portfolio' },
    'portfolio.description': {
      EN: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
      DE: 'Entdecken Sie hier eine Auswahl meiner Arbeiten - Interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.',
    },

    // Project Section
    'project.live_test': { EN: 'Live Test', DE: 'Live-Test' },
    'project.github': { EN: 'GitHub', DE: 'GitHub' },
    'project.no_projects': { EN: 'No projects available', DE: 'Keine Projekte verfügbar' },
    'project.join.description': {
      EN: 'Together with other training participants, I co-developed a web-based task management tool inspired by the Kanban system. Using HTML, CSS, JavaScript, and Firebase, we built a collaborative app with drag-and-drop functionality and task assignment by user and category. Git was used for version control and teamwork coordination.',
      DE: 'Zusammen mit anderen Teilnehmern der Ausbildung habe ich ein webbasiertes Task-Management-Tool entwickelt, das vom Kanban-System inspiriert ist. Mit HTML, CSS, JavaScript und Firebase haben wir eine kollaborative App mit Drag-and-Drop-Funktionalität und Aufgabenverwaltung nach Benutzer und Kategorie erstellt. Git wurde für die Versionskontrolle und Teamkoordination verwendet.',
    },
    'project.pollo_loco.description': {
      EN: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      DE: 'Spring-, Lauf- und Wurfspiel basierend auf objektorientiertem Ansatz. Hilf Pepe dabei, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
    },
    'project.da_bubble.description': {
      EN: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization. Users can create channels for different projects or topics, share files, and integrate with various tools to streamline workflows. The app fosters seamless communication, making it an essential tool for modern teams to stay connected and productive.',
      DE: 'Diese App ist eine Slack-Clone-App. Sie revolutioniert die Teamkommunikation und Zusammenarbeit mit ihrer intuitiven Benutzeroberfläche, Echtzeitnachrichten und robuster Kanalorganisation. Benutzer können Kanäle für verschiedene Projekte oder Themen erstellen, Dateien teilen und sich mit verschiedenen Tools integrieren, um Arbeitsabläufe zu optimieren. Die App fördert eine nahtlose Kommunikation und ist damit ein unverzichtbares Werkzeug für moderne Teams, um in Verbindung zu bleiben und produktiv zu sein.',
    },

    // Contact Section
    'contact.title': { EN: 'Contact', DE: 'Kontakt' },
    'contact.got_problem': { EN: 'Got a problem to solve?', DE: 'Haben Sie ein Problem zu lösen?' },
    'contact.encourage': {
      EN: 'Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work.',
      DE: 'Ermutigen Sie Menschen, Sie zu kontaktieren und beschreiben Sie, für welche Rolle Sie interessiert sind. Zeigen Sie, dass Sie durch Ihre Arbeit einen Mehrwert für ihre Projekte schaffen.',
    },
    'contact.need_frontend': {
      EN: 'Need a Frontend developer?',
      DE: 'Brauchen Sie einen Frontend-Entwickler?',
    },
    'contact.contact_me': { EN: 'Contact me!', DE: 'Kontaktieren Sie mich!' },
    'contact.your_name': { EN: 'Your name', DE: 'Ihr Name' },
    'contact.your_email': { EN: 'Your email', DE: 'Ihre E-Mail' },
    'contact.your_message': { EN: 'Your message', DE: 'Ihre Nachricht' },
    'contact.name_required': { EN: 'Your name is required', DE: 'Ihr Name ist erforderlich' },
    'contact.email_required': { EN: 'Your email is required', DE: 'Ihre E-Mail ist erforderlich' },
    'contact.email_valid': {
      EN: 'Please enter a valid email',
      DE: 'Bitte geben Sie eine gültige E-Mail ein',
    },
    'contact.message_required': {
      EN: 'Your message is required',
      DE: 'Ihre Nachricht ist erforderlich',
    },
    'contact.privacy_text_1': { EN: 'I have read the', DE: 'Ich habe die' },
    'contact.privacy_text_2': { EN: 'Privacy Policy', DE: 'Datenschutzbestimmungen' },
    'contact.privacy_text_3': {
      EN: 'and agree to the processing of my data as described.',
      DE: 'gelesen und stimme der beschriebenen Verarbeitung meiner Daten zu.',
    },
    'contact.privacy_required': {
      EN: 'Please accept the privacy policy.',
      DE: 'Bitte akzeptieren Sie die Datenschutzerklärung.',
    },
    'contact.sending': { EN: 'Sending...', DE: 'Senden...' },
    'contact.send_message': { EN: 'Send Message :)', DE: 'Nachricht senden :)' },
    'contact.success': { EN: 'Message sent successfully!', DE: 'Nachricht erfolgreich gesendet!' },
    'contact.error': {
      EN: 'Failed to send message. Please try again.',
      DE: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
    },

    // Footer / Legal
    'footer.legal_notice': { EN: 'Legal Notice', DE: 'Impressum' },

    // Privacy Policy Section
    'privacy.title': {
      EN: 'Privacy Policy',
      DE: 'Datenschutzerklärung',
    },
    'privacy.back_button': {
      EN: 'Back',
      DE: 'Zurück',
    },
    'privacy.description': {
      EN: 'This privacy policy informs you about the nature, scope, and purpose of the processing of personal data within my online offering.',
      DE: 'Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb meines Online-Angebots.',
    },
    'privacy.controller_heading': {
      EN: '1. Controller',
      DE: '1. Verantwortlicher',
    },
    'privacy.controller_content': {
      EN: 'Hamidou Diallo\nEmail:',
      DE: 'Hamidou Diallo\nE-Mail:',
    },
    'privacy.collected_data_heading': {
      EN: '2. Collected Data',
      DE: '2. Erfasste Daten',
    },
    'privacy.collected_data_content': {
      EN: 'When visiting this website, no personal data is automatically collected. No cookies are set, and no tracking takes place.',
      DE: 'Beim Besuch dieser Website werden keine personenbezogenen Daten automatisch erfasst. Es werden keine Cookies gesetzt und es findet kein Tracking statt.',
    },
    'privacy.contact_form_heading': {
      EN: 'Contact Form',
      DE: 'Kontaktformular',
    },
    'privacy.contact_form_content': {
      EN: 'If you contact me via the contact form, the following data will be processed:\n– Name\n– Email address\n– Your message\n\nThis data is used exclusively to process your request and will not be shared with third parties.',
      DE: 'Wenn Sie mich über das Kontaktformular kontaktieren, werden folgende Daten verarbeitet:\n– Name\n– E-Mail-Adresse\n– Ihre Nachricht\n\nDiese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.',
    },
    'privacy.legal_basis_heading': {
      EN: '3. Legal Basis of Processing',
      DE: '3. Rechtsgrundlage der Verarbeitung',
    },
    'privacy.legal_basis_content': {
      EN: 'The processing of your data is carried out in accordance with Art. 6(1)(b) GDPR (for the fulfillment of a contract or pre-contractual measures).',
      DE: 'Die Verarbeitung Ihrer Daten erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO (zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen).',
    },
    'privacy.hosting_heading': {
      EN: '4. Hosting',
      DE: '4. Hosting',
    },
    'privacy.hosting_content': {
      EN: 'This website is hosted by Hetzner Online GmbH. The servers are located in Germany. Hetzner processes personal data only according to our instructions and within the framework of a data processing agreement in accordance with Art. 28 GDPR.',
      DE: 'Diese Website wird von der Hetzner Online GmbH gehostet. Die Server befinden sich in Deutschland. Hetzner verarbeitet personenbezogene Daten nur nach unseren Weisungen und im Rahmen eines Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO.',
    },
    'privacy.github_links_heading': {
      EN: '5. GitHub Links',
      DE: '5. GitHub-Links',
    },
    'privacy.github_links_content': {
      EN: 'This website contains links to my GitHub profile. When you click on a GitHub link, you will be redirected to the GitHub platform (GitHub Inc., USA). No data is transferred from your side to GitHub through my website.',
      DE: 'Diese Website enthält Links zu meinem GitHub-Profil. Wenn Sie auf einen GitHub-Link klicken, werden Sie auf die GitHub-Plattform (GitHub Inc., USA) weitergeleitet. Über meine Website werden keine Daten von Ihrer Seite an GitHub übertragen.',
    },
    'privacy.your_rights_heading': {
      EN: '6. Your Rights',
      DE: '6. Ihre Rechte',
    },
    'privacy.your_rights_intro': {
      EN: 'You have the right:',
      DE: 'Sie haben das Recht:',
    },
    'privacy.your_rights_list_1': {
      EN: 'to access the stored personal data (Art. 15 GDPR),',
      DE: 'auf Auskunft über die gespeicherten personenbezogenen Daten (Art. 15 DSGVO),',
    },
    'privacy.your_rights_list_2': {
      EN: 'to rectification of inaccurate data (Art. 16 GDPR),',
      DE: 'auf Berichtigung unrichtiger Daten (Art. 16 DSGVO),',
    },
    'privacy.your_rights_list_3': {
      EN: 'to erasure (Art. 17 GDPR),',
      DE: 'auf Löschung (Art. 17 DSGVO),',
    },
    'privacy.your_rights_list_4': {
      EN: 'to restriction of processing (Art. 18 GDPR),',
      DE: 'auf Einschränkung der Verarbeitung (Art. 18 DSGVO),',
    },
    'privacy.your_rights_list_5': {
      EN: 'to data portability (Art. 20 GDPR),',
      DE: 'auf Datenübertragbarkeit (Art. 20 DSGVO),',
    },
    'privacy.your_rights_list_6': {
      EN: 'to object to the processing (Art. 21 GDPR).',
      DE: 'auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).',
    },
    'privacy.contact_me_text': {
      EN: 'Please contact me at:',
      DE: 'Bitte kontaktieren Sie mich unter:',
    },
    'privacy.complaint_right_heading': {
      EN: '7. Right to Lodge a Complaint',
      DE: '7. Recht auf Beschwerde',
    },
    'privacy.complaint_right_content': {
      EN: 'You have the right to lodge a complaint with the competent supervisory authority if you believe that the processing of your personal data violates the GDPR.',
      DE: 'Sie haben das Recht, Beschwerde bei der zuständigen Aufsichtsbehörde einzulegen, wenn Sie der Meinung sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.',
    },
    'privacy.changes_heading': {
      EN: '8. Changes to the Privacy Policy',
      DE: '8. Änderungen der Datenschutzerklärung',
    },
    'privacy.changes_content': {
      EN: 'I reserve the right to amend this privacy policy in the event of changes to the website or legal requirements. Please check regularly for the current status.',
      DE: 'Ich behalte mir vor, diese Datenschutzerklärung bei Änderungen der Website oder gesetzlicher Anforderungen anzupassen. Bitte überprüfen Sie regelmäßig den aktuellen Stand.',
    },
    'privacy.last_updated': {
      EN: 'Last updated: April 2025',
      DE: 'Zuletzt aktualisiert: April 2025',
    },

    // legal notice

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
