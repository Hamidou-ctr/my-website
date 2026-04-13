import { Component } from '@angular/core';
import { Project } from './project/project';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [Project],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {}
