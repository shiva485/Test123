import { TestBed } from '@angular/core/testing';

import { SketchbService } from './sketchb.service';

describe('SketchbService', () => {
  let service: SketchbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SketchbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
