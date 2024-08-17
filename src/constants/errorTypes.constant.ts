import { z } from 'zod';
import { STATUS_CODES } from './statusCode.constant';

const errorType = [
  'VALIDATION_ERROR',
  'DUPLICATE_KEY_VALUE',
  'INTERNAL_SERVER_ERROR',
  'RESOURCE_NOT_FOUND',
  'ORIGIN_IS_UNDEFINED',
  'NOT_ALLOWED',
] as const;

export const ErrorTypeEnum = z.enum(errorType);

export const errorMap = {
  [ErrorTypeEnum.enum.VALIDATION_ERROR]: {
    httpStatusCode: STATUS_CODES.BAD_REQUEST,
    body: { code: 'validation_error', message: 'Validation failed' },
  },
  [ErrorTypeEnum.enum.DUPLICATE_KEY_VALUE]: {
    httpStatusCode: STATUS_CODES.CONFLICT,
    body: { code: 'duplicate_key_value', message: 'Duplicate key value' },
  },
  [ErrorTypeEnum.enum.INTERNAL_SERVER_ERROR]: {
    httpStatusCode: STATUS_CODES.INTERNAL_SERVER_ERROR,
    body: { code: 'internal_server_error', message: 'Internal server error' },
  },
  [ErrorTypeEnum.enum.RESOURCE_NOT_FOUND]: {
    httpStatusCode: STATUS_CODES.NOT_FOUND,
    body: { code: 'resource_not_found', message: 'Resource not found' },
  },
  [ErrorTypeEnum.enum.ORIGIN_IS_UNDEFINED]: {
    httpStatusCode: STATUS_CODES.BAD_REQUEST,
    body: { code: 'origin_is_undefined', message: 'Origin is undefined' },
  },
  [ErrorTypeEnum.enum.NOT_ALLOWED]: {
    httpStatusCode: STATUS_CODES.FORBIDDEN,
    body: { code: 'not_allowed', message: 'Not allowed' },
  },
};

export type ErrorTypeEnum = z.infer<typeof ErrorTypeEnum>;

export const getErrorObject = (type: ErrorTypeEnum) => {
  const validateErrorType = ErrorTypeEnum.safeParse(type);
  return validateErrorType.success ? errorMap[type] : errorMap[ErrorTypeEnum.enum.INTERNAL_SERVER_ERROR];
};
