import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemahasiswaanComponent } from './kemahasiswaan.component';

describe('KemahasiswaanComponent', () => {
  let component: KemahasiswaanComponent;
  let fixture: ComponentFixture<KemahasiswaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemahasiswaanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemahasiswaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
