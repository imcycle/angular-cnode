import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CenterComponent } from './center.component';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CenterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CenterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-cnode'`, () => {
    const fixture = TestBed.createComponent(CenterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-cnode');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CenterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-cnode!');
  });
});
