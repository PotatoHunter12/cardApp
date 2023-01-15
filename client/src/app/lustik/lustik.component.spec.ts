import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LustikComponent } from './lustik.component';

describe('LustikComponent', () => {
  let component: LustikComponent;
  let fixture: ComponentFixture<LustikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LustikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LustikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
