import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePublicationComponent } from './private-publication.component';

describe('PrivatePublicationComponent', () => {
  let component: PrivatePublicationComponent;
  let fixture: ComponentFixture<PrivatePublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivatePublicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivatePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
