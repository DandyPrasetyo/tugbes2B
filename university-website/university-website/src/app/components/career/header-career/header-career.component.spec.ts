import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCareerComponent } from './header-career.component';

describe('HeaderCareerComponent', () => {
  let component: HeaderCareerComponent;
  let fixture: ComponentFixture<HeaderCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCareerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
