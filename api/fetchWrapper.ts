import {API} from '../enum/apiPath.enum';

async function http<T>(path: string, config: RequestInit): Promise<T> {
  const request = new Request(path, config);
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
}
export async function get<T>(path: string, config?: RequestInit): Promise<T> {
  const init = {method: 'get', ...config};
  return await http<T>(`${API.mainPath}${path}`, init);
}

export async function post<T, U>(
  path: string,
  body: T,
  config?: RequestInit,
): Promise<U> {
  const init = {method: 'post', body: JSON.stringify(body), ...config};
  return await http<U>(`${API.mainPath}${path}`, init);
}

export async function put<T, U>(
  path: string,
  body: T,
  config?: RequestInit,
): Promise<U> {
  const init = {method: 'put', body: JSON.stringify(body), ...config};
  return await http<U>(path, init);
}
