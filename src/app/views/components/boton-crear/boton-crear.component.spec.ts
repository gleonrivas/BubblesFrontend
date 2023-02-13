import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCrearComponent } from './boton-crear.component';

describe('BotonCrearComponent', () => {
  let component: BotonCrearComponent;
  let fixture: ComponentFixture<BotonCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
