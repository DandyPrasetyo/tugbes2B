import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasilitasDetailComponent } from './fasilitas-detail.component';

describe('FasilitasDetailComponent', () => {
  let component: FasilitasDetailComponent;
  let fixture: ComponentFixture<FasilitasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FasilitasDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FasilitasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
