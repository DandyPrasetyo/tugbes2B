import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPerusahaanComponent } from './list-perusahaan.component';

describe('ListPerusahaanComponent', () => {
  let component: ListPerusahaanComponent;
  let fixture: ComponentFixture<ListPerusahaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPerusahaanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPerusahaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
