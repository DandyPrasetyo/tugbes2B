import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisasiMahasiswaComponent } from './organisasi-mahasiswa.component';

describe('OrganisasiMahasiswaComponent', () => {
  let component: OrganisasiMahasiswaComponent;
  let fixture: ComponentFixture<OrganisasiMahasiswaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganisasiMahasiswaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisasiMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
