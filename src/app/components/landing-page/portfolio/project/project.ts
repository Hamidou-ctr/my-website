import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../service/translate.pipe';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  protected readonly projects = [
    {
      id: 'join',
      name: 'Join',
      language: 'JavaScript | HTML | CSS',
      description: {
        EN: 'Together with other training participants, I co-developed a web-based task management tool inspired by the Kanban system. Using HTML, CSS, JavaScript, and Firebase, we built a collaborative app with drag-and-drop functionality and task assignment by user and category. Git was used for version control and teamwork coordination.',
        DE: 'Zusammen mit anderen Teilnehmern der Ausbildung habe ich ein webbasiertes Task-Management-Tool entwickelt, das vom Kanban-System inspiriert ist. Mit HTML, CSS, JavaScript und Firebase haben wir eine kollaborative App mit Drag-and-Drop-Funktionalität und Aufgabenverwaltung nach Benutzer und Kategorie erstellt. Git wurde für die Versionskontrolle und Teamkoordination verwendet.',
      },
      imageUrl: 'img/join.svg',
      liveTestUrl: 'https://join.hamidoudiallo.de/login.html',
      githubUrl: 'https://github.com/Hamidou-ctr/join',
    },
    {
      id: 'pollo_loco',
      name: 'EL Pollo Loco',
      language: 'JavaScript | HTML | CSS',
      description: {
        EN: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        DE: 'Spring-, Lauf- und Wurfspiel basierend auf objektorientiertem Ansatz. Hilf Pepe dabei, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      },
      imageUrl: 'img/Pollo_loco.svg',
      liveTestUrl: 'https://pollo-loco.hamidoudiallo.de/',
      githubUrl: 'https://github.com/Hamidou-ctr/pollo-loco',
    },
    {
      id: 'da_bubble',
      name: 'Da Bubble',
      language: 'Angular, TypeScript, HTML, CSS',
      description: {
        EN: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization. Users can create channels for different projects or topics, share files, and integrate with various tools to streamline workflows. The app fosters seamless communication, making it an essential tool for modern teams to stay connected and productive.',
        DE: 'Diese App ist eine Slack-Clone-App. Sie revolutioniert die Teamkommunikation und Zusammenarbeit mit ihrer intuitiven Benutzeroberfläche, Echtzeitnachrichten und robuster Kanalorganisation. Benutzer können Kanäle für verschiedene Projekte oder Themen erstellen, Dateien teilen und sich mit verschiedenen Tools integrieren, um Arbeitsabläufe zu optimieren. Die App fördert eine nahtlose Kommunikation und ist damit ein unverzichtbares Werkzeug für moderne Teams, um in Verbindung zu bleiben und produktiv zu sein.',
      },
      imageUrl: 'img/da_bubble.svg',
      liveTestUrl: 'https://da-babble.hamidoudiallo.de/intro',
      githubUrl: 'https://github.com/Hamidou-ctr/DA-Bubble',
    },
  ];

  getProjectDescription(projectId: string): string {
    return `project.${projectId}.description`;
  }
}
