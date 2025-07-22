import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { changeColor } from '../globalfunc';

@Component({
  selector: 'app-guide-section',
  standalone: true,
  imports: [],
  templateUrl: './guide-section.component.html',
  styleUrl: './guide-section.component.scss'
})
export class GuideSectionComponent implements AfterViewInit, OnDestroy {
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
      '.AnimationLeft, .AnimationRight'
    );

    animatedElements.forEach((section: Element) => this.observer.observe(section));
  }

  ngOnDestroy(): void {
    // Clean up observer
    if (this.observer) {
      this.observer.disconnect();
    }
  };

  ChangeHandler(event: MouseEvent): void {
    const target = (event.target as HTMLElement).closest('.detail') as HTMLElement;

    if (target) {
      changeColor(target, this.elRef.nativeElement); // Pass container context
    } else {
      console.warn('Could not find .detail element');
    }
  }

}
