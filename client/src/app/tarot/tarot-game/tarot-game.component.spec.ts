import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotGameComponent } from './tarot-game.component';

describe('TarotGameComponent', () => {
  let component: TarotGameComponent;
  let fixture: ComponentFixture<TarotGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarotGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarotGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
