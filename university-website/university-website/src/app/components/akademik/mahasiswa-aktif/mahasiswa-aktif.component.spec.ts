import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiswaAktifComponent } from './mahasiswa-aktif.component';

describe('MahasiswaAktifComponent', () => {
  let component: MahasiswaAktifComponent;
  let fixture: ComponentFixture<MahasiswaAktifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MahasiswaAktifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MahasiswaAktifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
