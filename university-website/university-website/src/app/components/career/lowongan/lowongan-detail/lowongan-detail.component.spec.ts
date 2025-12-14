import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowonganDetailComponent } from './lowongan-detail.component';

describe('LowonganDetailComponent', () => {
  let component: LowonganDetailComponent;
  let fixture: ComponentFixture<LowonganDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowonganDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowonganDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
