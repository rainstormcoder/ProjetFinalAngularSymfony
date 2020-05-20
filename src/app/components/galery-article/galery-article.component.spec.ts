import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryArticleComponent } from './galery-article.component';

describe('GaleryArticleComponent', () => {
  let component: GaleryArticleComponent;
  let fixture: ComponentFixture<GaleryArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleryArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
