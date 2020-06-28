import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsPaginatorComponent } from './bts-paginator.component';

describe('BtsPaginatorComponent', () => {
  let component: BtsPaginatorComponent;
  let fixture: ComponentFixture<BtsPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtsPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtsPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
