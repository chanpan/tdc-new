import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLeftsComponent } from './menu-lefts.component';

describe('MenuLeftsComponent', () => {
  let component: MenuLeftsComponent;
  let fixture: ComponentFixture<MenuLeftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLeftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLeftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
