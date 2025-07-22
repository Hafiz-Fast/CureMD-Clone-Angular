import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { toggleSubheading } from '../globalfunc';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss'
})
export class FeaturesSectionComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.2 });

    // Select elements only within this component to avoid affecting other components
    const animatedElements = this.elRef.nativeElement.querySelectorAll(
      '.features-left-animation, .features-right-animation'
    );

    animatedElements.forEach((section: Element) => this.observer.observe(section));
  }

  ngOnDestroy(): void {
    // Clean up observer
    if (this.observer) {
      this.observer.disconnect();
    }
  };

  toggleHandler(event: MouseEvent): void {
    // Traverse up to the closest .feature element
    const target = (event.target as HTMLElement).closest('.feature') as HTMLElement;

    if (target) {
      toggleSubheading(target);
    } else {
      console.warn('Could not find .feature element');
    }
  }
}
