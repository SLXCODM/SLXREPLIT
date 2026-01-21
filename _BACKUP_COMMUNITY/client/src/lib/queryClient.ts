import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Get API base URL
const getApiBaseUrl = () => {
  // Development: use local backend
  if (import.meta.env.DEV) {
    return "";
  }
  // Production: Use environment variable or default to new Render backend
  return import.meta.env.VITE_API_BASE_URL || "https://slxreplit.onrender.com";
};

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const fullUrl = url.startsWith("http") ? url : `${getApiBaseUrl()}${url}`;
  const fetchOptions: RequestInit = {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
  };
  // Only include credentials for same-origin requests
  // Cross-origin requests to Render (using Access-Control-Allow-Origin: *) must not include credentials
  // If getApiBaseUrl() returns a non-empty string, it's a cross-origin request
  if (!url.startsWith("http") && !getApiBaseUrl()) {
    fetchOptions.credentials = "include";
  }
  const res = await fetch(fullUrl, fetchOptions);

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
    async ({ queryKey }) => {
      const url = queryKey.join("/") as string;
      const fullUrl = url.startsWith("http") ? url : `${getApiBaseUrl()}${url}`;
      const res = await fetch(fullUrl);

      if (unauthorizedBehavior === "returnNull" && res.status === 401) {
        return null;
      }

      await throwIfResNotOk(res);
      return await res.json();
    };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
