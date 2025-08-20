import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5 minutes
			gcTime: 1000 * 60 * 30, // 30 minutes (renamed from cacheTime)
			retry: (failureCount, error) => {
				// Don't retry 4xx errors
				if (error instanceof Error && error.message.includes("4")) {
					return false;
				}
				return failureCount < 3;
			},
		},
	},
});
