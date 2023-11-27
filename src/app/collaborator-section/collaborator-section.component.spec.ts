import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorSectionComponent } from './collaborator-section.component';

describe('CollaboratorSectionComponent', () => {
  let component: CollaboratorSectionComponent;
  let fixture: ComponentFixture<CollaboratorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollaboratorSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollaboratorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
