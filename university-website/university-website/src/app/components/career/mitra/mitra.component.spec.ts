import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitraComponent } from './mitra.component';

describe('MitraComponent', () => {
  let component: MitraComponent;
  let fixture: ComponentFixture<MitraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
