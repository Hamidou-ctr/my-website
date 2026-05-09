import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../service/translate.pipe';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicy {}
