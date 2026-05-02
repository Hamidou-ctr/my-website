import { Component, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ScrollService } from '../../../service/scroll-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  @ViewChild('profileSection') profileSection!: ElementRef;

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.checkOrientation();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkOrientation();
  }

  checkOrientation() {
    const section = this.profileSection.nativeElement;
    const isMobile = window.innerWidth <= 800;
    const isPortrait = window.innerHeight > window.innerWidth;

    section.style.flexDirection = isMobile || isPortrait ? 'column' : 'row';
    section.style.justifyContent = 'center';
    section.style.alignItems = 'center';

    if (!isMobile && !isPortrait) {
      section.style.justifyContent = 'space-between';
    }
  }

  scrollTo(section: string) {
    this.scrollService.scrollTo(section);
  }
}
