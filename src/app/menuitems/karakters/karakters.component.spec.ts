import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaraktersComponent } from './karakters.component';

describe('KaraktersComponent', () => {
  let component: KaraktersComponent;
  let fixture: ComponentFixture<KaraktersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaraktersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaraktersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
