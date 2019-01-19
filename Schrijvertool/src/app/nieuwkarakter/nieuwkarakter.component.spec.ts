import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwkarakterComponent } from './nieuwkarakter.component';

describe('NieuwkarakterComponent', () => {
  let component: NieuwkarakterComponent;
  let fixture: ComponentFixture<NieuwkarakterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwkarakterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwkarakterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
