import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Peluqueros } from './peluqueros';

describe('Peluqueros', () => {
  let component: Peluqueros;
  let fixture: ComponentFixture<Peluqueros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Peluqueros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Peluqueros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
