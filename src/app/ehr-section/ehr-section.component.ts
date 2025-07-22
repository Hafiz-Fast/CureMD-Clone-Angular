import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ehr-section',
  standalone: true,
  imports: [],
  templateUrl: './ehr-section.component.html',
  styleUrl: './ehr-section.component.scss'
})
export class EHRSectionComponent implements AfterViewInit, OnDestroy {
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
      '.EHR-Animation'
    );

    animatedElements.forEach((section: Element) => this.observer.observe(section));
  }

  ngOnDestroy(): void {
    // Clean up observer
    if (this.observer) {
      this.observer.disconnect();
    }
  };
}
