import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeasiswaComponent } from './beasiswa.component';

describe('BeasiswaComponent', () => {
  let component: BeasiswaComponent;
  let fixture: ComponentFixture<BeasiswaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeasiswaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
