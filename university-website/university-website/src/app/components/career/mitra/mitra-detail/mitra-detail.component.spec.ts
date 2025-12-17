import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitraDetailComponent } from './mitra-detail.component';

describe('MitraDetailComponent', () => {
  let component: MitraDetailComponent;
  let fixture: ComponentFixture<MitraDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitraDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
