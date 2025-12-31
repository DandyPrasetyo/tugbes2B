import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiMisiComponent } from './visi-misi.component';

describe('VisiMisiComponent', () => {
  let component: VisiMisiComponent;
  let fixture: ComponentFixture<VisiMisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisiMisiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiMisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
