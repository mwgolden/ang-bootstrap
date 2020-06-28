import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsTableComponent } from './bts-table.component';

describe('BtsTableComponent', () => {
  let component: BtsTableComponent;
  let fixture: ComponentFixture<BtsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
