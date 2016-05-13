import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2StartAppComponent } from '../app/angular2-start.component';

beforeEachProviders(() => [Angular2StartAppComponent]);

describe('App: Angular2Start', () => {
  it('should create the app',
      inject([Angular2StartAppComponent], (app: Angular2StartAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-start works!\'',
      inject([Angular2StartAppComponent], (app: Angular2StartAppComponent) => {
    expect(app.title).toEqual('angular2-start works!');
  }));
});
