import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JalurPendaftaranComponent } from './jalur-pendaftaran.component';

describe('JalurPendaftaranComponent', () => {
  let component: JalurPendaftaranComponent;
  let fixture: ComponentFixture<JalurPendaftaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JalurPendaftaranComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JalurPendaftaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
