import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.css',
})
export class LegalNotice {}
