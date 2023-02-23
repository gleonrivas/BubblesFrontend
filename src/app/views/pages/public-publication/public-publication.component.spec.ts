import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPublicationComponent } from './public-publication.component';

describe('PublicPublicationComponent', () => {
  let component: PublicPublicationComponent;
  let fixture: ComponentFixture<PublicPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicPublicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
