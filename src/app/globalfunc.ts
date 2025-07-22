// For feature-section
export function toggleSubheading(clickedElement: HTMLElement): void {
  // Close all other features and their target images
  document.querySelectorAll('.feature').forEach((feature) => {
    if (feature !== clickedElement) {
      feature.classList.remove('active');
      const targetSelector = feature.getAttribute('data-target');
      if (targetSelector) {
        const targetImage = document.querySelector(targetSelector);
        if (targetImage instanceof HTMLElement) {
          targetImage.classList.remove('active');
        }
      }
    }
  });

  // Toggle the clicked one
  clickedElement.classList.toggle('active');
  const targetSelector = clickedElement.getAttribute('data-target');
  if (targetSelector) {
    const targetImage = document.querySelector(targetSelector);
    if (targetImage instanceof HTMLElement) {
      targetImage.classList.toggle('active');
    }
  }
}

// For guide-section
export function changeColor(clickedElement: HTMLElement, container: HTMLElement): void {
  // Remove 'select' from all details and images inside the current component
  container.querySelectorAll('.detail').forEach((feature) => {
    feature.classList.remove('select');
  });

  container.querySelectorAll('.guide-image').forEach((image) => {
    image.classList.remove('select');
  });

  // Add 'select' to the clicked detail
  clickedElement.classList.add('select');

  // Show the corresponding image
  const targetSelector = clickedElement.getAttribute('data-target');
  if (targetSelector) {
    const targetImage = container.querySelector<HTMLElement>(targetSelector);
    if (targetImage) {
      targetImage.classList.add('select');
    }
  }
}
