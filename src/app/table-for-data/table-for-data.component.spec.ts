import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableForDataComponent } from './table-for-data.component';

describe('TableForDataComponent', () => {
  let component: TableForDataComponent;
  let fixture: ComponentFixture<TableForDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableForDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableForDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
