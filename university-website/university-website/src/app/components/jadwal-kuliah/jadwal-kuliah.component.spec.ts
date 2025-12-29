import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadwalKuliahComponent } from './jadwal-kuliah.component';

describe('JadwalKuliahComponent', () => {
  let component: JadwalKuliahComponent;
  let fixture: ComponentFixture<JadwalKuliahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JadwalKuliahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JadwalKuliahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
