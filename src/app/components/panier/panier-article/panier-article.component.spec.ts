import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierArticleComponent } from './panier-article.component';

describe('PanierArticleComponent', () => {
  let component: PanierArticleComponent;
  let fixture: ComponentFixture<PanierArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
