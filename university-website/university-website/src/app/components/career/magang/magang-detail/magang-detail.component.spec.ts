import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagangDetailComponent } from './magang-detail.component';

describe('MagangDetailComponent', () => {
  let component: MagangDetailComponent;
  let fixture: ComponentFixture<MagangDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagangDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagangDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
