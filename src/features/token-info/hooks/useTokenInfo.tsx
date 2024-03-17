import { HOST } from "@shared/util";
import { useQuery } from "@tanstack/react-query";

export default function useTokenInfo() {
    const { data, isPending, error } = useQuery<TTokenInfo[]>({
        queryKey: ['token-info'],
        queryFn: () => fetch(`${HOST}/token-info/data.json`, {
            method: "GET",
        }).then(res => res.json()),
        staleTime: 1000 * 60,
    });

    return {
        data,
        isPending,
        error,
    }
}
