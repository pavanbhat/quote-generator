import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteComponentComponent } from './qoute-component.component';

describe('QouteComponentComponent', () => {
  let component: QouteComponentComponent;
  let fixture: ComponentFixture<QouteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QouteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QouteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
