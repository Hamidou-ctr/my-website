import { Component, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  @ViewChild('profileSection') profileSection!: ElementRef;

  ngAfterViewInit() {
    this.checkOrientation();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkOrientation();
  }

  checkOrientation() {
    const section = this.profileSection.nativeElement;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Unter 769px (bis 768px) immer column
    if (viewportWidth <= 800) {
      console.log('Unter 768px - Setze auf column');
      section.style.flexDirection = 'column';
      section.style.justifyContent = 'center';
      section.style.alignItems = 'center';
      return;
    }

    // Ab 769px: Nach Bildschirmorientierung entscheiden
    console.log('Viewport Höhe:', viewportHeight, 'Viewport Breite:', viewportWidth);
    console.log('Ist höher als breit?', viewportHeight > viewportWidth);

    if (viewportHeight > viewportWidth) {
      // Bildschirm ist hochkant (portrait)
      console.log('Setze auf column');
      section.style.flexDirection = 'column';
      section.style.justifyContent = 'center';
      section.style.alignItems = 'center';
    } else {
      // Bildschirm ist querformat (landscape)
      console.log('Setze auf row');
      section.style.flexDirection = 'row';
      section.style.justifyContent = 'space-between';
      section.style.alignItems = 'center';
    }
  }
}
