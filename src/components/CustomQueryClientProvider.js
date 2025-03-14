import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react";

const CustomQueryClientProvider = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: 10000 * 60 } } }))

    return (
        <QueryClientProvider client={queryClient} >
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default CustomQueryClientProvider