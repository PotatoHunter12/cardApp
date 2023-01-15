import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrTarotComponent } from './fr-tarot.component';

describe('FrTarotComponent', () => {
  let component: FrTarotComponent;
  let fixture: ComponentFixture<FrTarotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrTarotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrTarotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
