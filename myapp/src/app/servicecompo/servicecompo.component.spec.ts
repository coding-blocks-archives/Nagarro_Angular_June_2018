import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecompoComponent } from './servicecompo.component';

describe('ServicecompoComponent', () => {
  let component: ServicecompoComponent;
  let fixture: ComponentFixture<ServicecompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
