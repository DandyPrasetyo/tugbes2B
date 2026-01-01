import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrukturOrganisasiComponent } from './struktur-organisasi.component';

describe('StrukturOrganisasiComponent', () => {
  let component: StrukturOrganisasiComponent;
  let fixture: ComponentFixture<StrukturOrganisasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrukturOrganisasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrukturOrganisasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
