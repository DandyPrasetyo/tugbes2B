import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLowonganComponent } from './form-lowongan.component';

describe('FormLowonganComponent', () => {
  let component: FormLowonganComponent;
  let fixture: ComponentFixture<FormLowonganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLowonganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLowonganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
