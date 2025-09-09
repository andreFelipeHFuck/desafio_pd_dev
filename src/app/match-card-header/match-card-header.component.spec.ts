import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCardHeaderComponent } from './match-card-header.component';

describe('MatchCardHeaderComponent', () => {
  let component: MatchCardHeaderComponent;
  let fixture: ComponentFixture<MatchCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchCardHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
