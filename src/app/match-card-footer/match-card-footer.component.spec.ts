import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCardFooterComponent } from './match-card-footer.component';

describe('MatchCardFooterComponent', () => {
  let component: MatchCardFooterComponent;
  let fixture: ComponentFixture<MatchCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchCardFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
