import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCareerComponent } from './footer-career.component';

describe('FooterCareerComponent', () => {
  let component: FooterCareerComponent;
  let fixture: ComponentFixture<FooterCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCareerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
