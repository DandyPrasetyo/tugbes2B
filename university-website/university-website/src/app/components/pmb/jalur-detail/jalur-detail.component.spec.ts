import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JalurDetailComponent } from './jalur-detail.component';

describe('JalurDetailComponent', () => {
  let component: JalurDetailComponent;
  let fixture: ComponentFixture<JalurDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JalurDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JalurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
