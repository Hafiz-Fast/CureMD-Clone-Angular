import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactsSectionComponent } from './impacts-section.component';

describe('ImpactsSectionComponent', () => {
  let component: ImpactsSectionComponent;
  let fixture: ComponentFixture<ImpactsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
