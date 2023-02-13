import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSeguidoresComponent } from './boton-seguidores.component';

describe('BotonSeguidoresComponent', () => {
  let component: BotonSeguidoresComponent;
  let fixture: ComponentFixture<BotonSeguidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonSeguidoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonSeguidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
