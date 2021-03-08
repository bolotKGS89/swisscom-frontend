import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTogglesComponent } from './list-toggles.component';

describe('ListTogglesComponent', () => {
  let component: ListTogglesComponent;
  let fixture: ComponentFixture<ListTogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTogglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
