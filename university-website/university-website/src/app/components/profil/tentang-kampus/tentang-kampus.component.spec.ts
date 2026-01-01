import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentangKampusComponent } from './tentang-kampus.component';

describe('TentangKampusComponent', () => {
  let component: TentangKampusComponent;
  let fixture: ComponentFixture<TentangKampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TentangKampusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TentangKampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
