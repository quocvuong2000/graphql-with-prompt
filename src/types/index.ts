/**
 * Common type definitions for the application
 */

/**
 * User type definition
 */
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

/**
 * Pagination parameters for API requests
 */
export interface PaginationParams {
  page: number;
  limit: number;
}

/**
 * Pagination metadata for API responses
 */
export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

/**
 * Generic paginated response type
 */
export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

/**
 * Sort direction for API requests
 */
export type SortDirection = 'asc' | 'desc';

/**
 * Sort parameters for API requests
 */
export interface SortParams {
  field: string;
  direction: SortDirection;
}

export interface CarItem {
  id: string;
  name: string;
  price: string;
  description: string;
  mileage: string;
  owners: string;
  registrationDate: string;
  createdAt: string;
  imageUrl: string;
}

export interface IPokemon {
  name: string;
  id: string;
  artwork: string;
}
// Define the mock data interface
export interface MockData {
  items: CarItem[];
}
