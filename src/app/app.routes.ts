import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { LegalNotice } from './components/landing-page/legal-notice/legal-notice';
import { PrivacyPolicy } from './components/landing-page/privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'legal-notice', component: LegalNotice },
  { path: 'privacy-policy', component: PrivacyPolicy },
];
