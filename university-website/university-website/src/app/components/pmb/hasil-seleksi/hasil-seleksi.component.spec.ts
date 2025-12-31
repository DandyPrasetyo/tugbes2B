import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasilSeleksiComponent } from './hasil-seleksi.component';

describe('HasilSeleksiComponent', () => {
  let component: HasilSeleksiComponent;
  let fixture: ComponentFixture<HasilSeleksiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HasilSeleksiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HasilSeleksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
