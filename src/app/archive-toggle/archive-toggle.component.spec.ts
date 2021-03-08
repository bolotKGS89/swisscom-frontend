import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveToggleComponent } from './archive-toggle.component';

describe('ArchiveToggleComponent', () => {
  let component: ArchiveToggleComponent;
  let fixture: ComponentFixture<ArchiveToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
