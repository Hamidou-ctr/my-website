import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { LegalNotice } from './components/landing-page/legal-notice/legal-notice';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'legal-notice', component: LegalNotice },
];
