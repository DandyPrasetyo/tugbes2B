import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPerusahaanComponent } from './form-perusahaan.component';

describe('FormPerusahaanComponent', () => {
  let component: FormPerusahaanComponent;
  let fixture: ComponentFixture<FormPerusahaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPerusahaanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPerusahaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
