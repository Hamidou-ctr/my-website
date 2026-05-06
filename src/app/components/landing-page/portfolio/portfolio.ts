import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from './project/project';
import { TranslatePipe } from '../../../service/translate.pipe';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslatePipe, Project],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {}
