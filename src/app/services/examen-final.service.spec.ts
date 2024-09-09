import { TestBed } from '@angular/core/testing';

import { ExamenFinalService } from './examen-final.service';

describe('ExamenFinalService', () => {
  let service: ExamenFinalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamenFinalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
