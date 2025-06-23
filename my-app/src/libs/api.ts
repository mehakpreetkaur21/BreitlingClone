const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

interface ApiResponse<T> {
  data: T | null;
  error?: string;
}

// Generic GET
export async function fetchData<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    if (!res.ok) throw new Error(`GET ${endpoint} failed`);
    const data = await res.json();
    return { data };
  } catch (err: any) {
    console.error('GET Error:', err.message);
    return { data: null, error: err.message };
  }
}

// Generic POST
export async function postData<T, U>(endpoint: string, payload: T): Promise<ApiResponse<U>> {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`POST ${endpoint} failed`);
    const data = await res.json();
    return { data };
  } catch (err: any) {
    console.error('POST Error:', err.message);
    return { data: null, error: err.message };
  }
}
