import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetySectionComponent } from './safety-section.component';

describe('SafetySectionComponent', () => {
  let component: SafetySectionComponent;
  let fixture: ComponentFixture<SafetySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafetySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafetySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
