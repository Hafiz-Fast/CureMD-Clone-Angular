import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FaqSectionComponent {
  
  toggleExtraFAQ(event: Event): void {
    const currentElement = event.currentTarget as HTMLElement;

    const extender1 = document.querySelector('.Extender1');
    const extender2 = document.querySelector('.Extender2');

    if (currentElement === extender1) {
      currentElement.classList.toggle('active2');
      if (extender2) extender2.classList.toggle('active2');
    } else if (currentElement === extender2) {
      currentElement.classList.toggle('active2');
      if (extender1) extender1.classList.toggle('active2');
    }

    document.querySelectorAll('.item.Extra').forEach(item => {
      item.classList.toggle('active2');
    });
  }

  toggleAnswer(event: Event): void {
    const currentElement = event.currentTarget as HTMLElement;

    document.querySelectorAll('.question').forEach(item => {
      if (item !== currentElement) {
        const parent = item.parentElement;
        parent?.classList.remove('active');

        item.classList.remove('active');

        const icon = item.querySelector('.icon');
        if (icon) {
          icon.classList.remove('active');
          icon.textContent = '+';
        }

        const nextElement = item.nextElementSibling;
        if (nextElement) {
          nextElement.classList.remove('active');
        }
      }
    });

    const parent = currentElement.parentElement;
    parent?.classList.toggle('active');
    currentElement.classList.toggle('active');

    const icon = currentElement.querySelector('.icon');
    if (icon) {
      icon.classList.toggle('active');
      icon.textContent = icon.textContent === '+' ? '−' : '+';
    }

    const nextElement = currentElement.nextElementSibling;
    if (nextElement) {
      nextElement.classList.toggle('active');
    }
  }
}
