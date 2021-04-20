import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipComponent } from './recip.component';

describe('RecipComponent', () => {
  let component: RecipComponent;
  let fixture: ComponentFixture<RecipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
