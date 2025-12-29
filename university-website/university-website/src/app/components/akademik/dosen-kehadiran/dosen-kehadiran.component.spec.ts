import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosenKehadiranComponent } from './dosen-kehadiran.component';

describe('DosenKehadiranComponent', () => {
  let component: DosenKehadiranComponent;
  let fixture: ComponentFixture<DosenKehadiranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DosenKehadiranComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosenKehadiranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
