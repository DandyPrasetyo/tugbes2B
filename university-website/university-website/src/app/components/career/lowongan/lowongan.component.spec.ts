import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowonganComponent } from './lowongan.component';

describe('LowonganComponent', () => {
  let component: LowonganComponent;
  let fixture: ComponentFixture<LowonganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowonganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowonganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
