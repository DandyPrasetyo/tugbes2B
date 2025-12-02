import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagangComponent } from './magang.component';

describe('MagangComponent', () => {
  let component: MagangComponent;
  let fixture: ComponentFixture<MagangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
