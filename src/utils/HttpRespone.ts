export const ApiError = Object.freeze({
  GenericError: 1,
  UserNotFound: 2,
  UserNotLoggedIn: 3,
  EmailNotVerified: 4,
  TransactionFailed: 5,
  AlreadyExist: 6,
} as const);

// Type for ApiError keys
type ApiErrorType = typeof ApiError[keyof typeof ApiError];

export class HttpUserError extends Error {
  public errorCode?: ApiErrorType;

  constructor(message: string, errorCode?: ApiErrorType) {
    super(message);
    this.errorCode = errorCode;
  }

  responseObj() {
    return {
      errorCode: this.errorCode,
      message: this.message,
    };
  }
}

export class HttpApiError extends Error {
  public status: number;
  public errorCode: ApiErrorType;

  constructor(status: number, message: string, errorCode?: ApiErrorType) {
    super(message);
    this.status = status;
    this.errorCode = errorCode || ApiError.GenericError;
  }

  responseObj() {
    return {
      status: this.status,
      errorCode: this.errorCode,
      message: this.message,
    };
  }
}

export const getCodeIf401Error = (error: unknown): ApiErrorType | null => {
  if (error instanceof HttpApiError && error.status === 401) {
    return error.errorCode;
  }
  return null;
};

export const HttpResponse = <T>(data: T): { data: T } => {
  return { data: data || ({} as T) };
};
