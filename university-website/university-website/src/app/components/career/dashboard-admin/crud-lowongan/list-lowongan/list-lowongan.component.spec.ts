import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLowonganComponent } from './list-lowongan.component';

describe('ListLowonganComponent', () => {
  let component: ListLowonganComponent;
  let fixture: ComponentFixture<ListLowonganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLowonganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLowonganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
