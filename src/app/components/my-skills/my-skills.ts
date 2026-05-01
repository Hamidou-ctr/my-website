import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../service/scroll-service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.css',
})
export class MySkills {
  constructor(private scrollService: ScrollService) {}

  scrollTo(section: string) {
    this.scrollService.scrollTo(section);
  }
}
