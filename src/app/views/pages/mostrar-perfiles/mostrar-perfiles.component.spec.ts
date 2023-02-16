import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPerfilesComponent } from './mostrar-perfiles.component';

describe('MostrarPerfilesComponent', () => {
  let component: MostrarPerfilesComponent;
  let fixture: ComponentFixture<MostrarPerfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPerfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
