import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.css',
})
export class MySkills {
}
