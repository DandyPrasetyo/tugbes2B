import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeasiswaDetailComponent } from './beasiswa-detail.component';

describe('BeasiswaDetailComponent', () => {
  let component: BeasiswaDetailComponent;
  let fixture: ComponentFixture<BeasiswaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeasiswaDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeasiswaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
