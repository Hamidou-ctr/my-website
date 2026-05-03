import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  protected readonly projects = [
    {
      name: 'Join ',
      language: 'JavaScript | HTML | CSS',
      description:
        ' Together with other training participants, I co-developed a web-based task management tool inspired by the Kanban system. Using HTML, CSS, JavaScript, and Firebase, we built a collaborative app with drag-and-drop functionality and task assignment by user and category. Git was used for version control and teamwork coordination.',
      imageUrl: 'img/join.svg',
      liveTestUrl: 'https://join.hamidoudiallo.de/login.html',
      githubUrl: 'https://github.com/username/project1',
    },

    {
      name: 'EL Pollo Loco',
      language: 'JavaScript | HTML | CSS',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      imageUrl: 'img/Pollo_loco.svg',
      liveTestUrl: 'https://project2-live-test.com',
      githubUrl: 'https://github.com/username/project2',
    },

    {
      name: 'Project 3',
      language: 'Angular, TypeScript, HTML, CSS',
      description:
        '    This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization. Users can create channels for different projects or topics, share files, and integrate with various tools to streamline workflows. The app fosters seamless communication, making it an essential tool for modern teams to stay connected and productive.',
      imageUrl: 'img/da_bubble.svg',
      liveTestUrl: 'https://project3-live-test.com',
      githubUrl: 'https://github.com/username/project3',
    },
  ];
}
