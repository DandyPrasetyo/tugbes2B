import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCareerComponent } from './layout-career.component';

describe('LayoutCareerComponent', () => {
  let component: LayoutCareerComponent;
  let fixture: ComponentFixture<LayoutCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutCareerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
