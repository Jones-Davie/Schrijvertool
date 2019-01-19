import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WezensComponent } from './wezens.component';

describe('WezensComponent', () => {
  let component: WezensComponent;
  let fixture: ComponentFixture<WezensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WezensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WezensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
