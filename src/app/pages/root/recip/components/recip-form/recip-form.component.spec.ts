import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipFormComponent } from './recip-form.component';

describe('RecipFormComponent', () => {
  let component: RecipFormComponent;
  let fixture: ComponentFixture<RecipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
