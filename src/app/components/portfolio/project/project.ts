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
      language: 'Angular, TypeScript, HTML, CSS',
      description:
        '    Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.        ',
      imageUrl: 'img/join.png',
      liveTestUrl: 'https://join.hamidoudiallo.de/login.html',
      githubUrl: 'https://github.com/username/project1',
    },

    {
      name: 'Project 2',
      language: 'Angular, TypeScript, HTML, CSS',
      description: '    Another project description goes here.        ',
      imageUrl: 'img/project2.png',
      liveTestUrl: 'https://project2-live-test.com',
      githubUrl: 'https://github.com/username/project2',
    },

    {
      name: 'Project 3',
      language: 'Angular, TypeScript, HTML, CSS',
      description: '    Yet another project description goes here.        ',
      imageUrl: 'img/project3.png',
      liveTestUrl: 'https://project3-live-test.com',
      githubUrl: 'https://github.com/username/project3',
    },

    {
      name: 'Project 4',
      language: 'Angular, TypeScript, HTML, CSS',
      description: '    Description for Project 4 goes here.        ',
      imageUrl: 'img/project4.png',
      liveTestUrl: 'https://project4-live-test.com',
      githubUrl: 'https://github.com/username/project4',
    },
  ];
}
