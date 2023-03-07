import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPerfilComponent } from './crear-perfil.component';

describe('CrearPerfilComponent', () => {
  let component: CrearPerfilComponent;
  let fixture: ComponentFixture<CrearPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
