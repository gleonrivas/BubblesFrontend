import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSeguidosComponent } from './home-seguidos.component';

describe('HomeSeguidosComponent', () => {
  let component: HomeSeguidosComponent;
  let fixture: ComponentFixture<HomeSeguidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSeguidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSeguidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
