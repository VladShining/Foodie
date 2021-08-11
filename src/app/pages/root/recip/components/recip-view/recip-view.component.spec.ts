import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipViewComponent } from './recip-view.component';

describe('RecipViewComponent', () => {
  let component: RecipViewComponent;
  let fixture: ComponentFixture<RecipViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
