import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../service/translate.pipe';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.css',
})
export class MySkills {
}
