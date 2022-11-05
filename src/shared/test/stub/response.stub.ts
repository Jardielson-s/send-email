import { Response } from 'express';

const stubResponse = Object.freeze({
  json: jest.fn(),
  status: jest.fn().mockReturnThis(),
});
export const ResponseStub = (): any => stubResponse as unknown as Response;
