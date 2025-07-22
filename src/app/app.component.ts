import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { ImpactsSectionComponent } from './impacts-section/impacts-section.component';
import { GuideSectionComponent } from './guide-section/guide-section.component';
import { EHRSectionComponent } from './ehr-section/ehr-section.component';
import { TrustSectionComponent } from './trust-section/trust-section.component';
import { SafetySectionComponent } from './safety-section/safety-section.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingSectionComponent, VideoSectionComponent, FeaturesSectionComponent, ImpactsSectionComponent, GuideSectionComponent, EHRSectionComponent, TrustSectionComponent, SafetySectionComponent, FaqSectionComponent, FooterSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
