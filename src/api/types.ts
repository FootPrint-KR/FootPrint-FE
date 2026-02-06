// FootPrint BE 응답 형식: { status: number, message: string, data: T }
export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  status: number;
  message: string;
  data: null;
}
