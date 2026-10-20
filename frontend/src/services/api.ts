import axios from 'axios';
export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api', timeout: 10000, headers: { 'Content-Type': 'application/json' } });
export function getErrorMessage(error: unknown) { if (axios.isAxiosError(error)) return error.response?.data?.message || 'Não foi possível conectar à API. Confira se o backend e o MongoDB estão ativos.'; return 'Ocorreu um erro inesperado.'; }
