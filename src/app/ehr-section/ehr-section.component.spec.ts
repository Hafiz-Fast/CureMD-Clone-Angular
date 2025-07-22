import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EHRSectionComponent } from './ehr-section.component';

describe('EHRSectionComponent', () => {
  let component: EHRSectionComponent;
  let fixture: ComponentFixture<EHRSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EHRSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EHRSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
