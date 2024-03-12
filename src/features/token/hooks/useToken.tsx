import { HOST } from "@shared/util";
import { useQuery } from "@tanstack/react-query";

export default function useToken() {
    const { data, isPending, error } = useQuery<TToken[]>({
        queryKey: ['token'],
        queryFn: () => fetch(`${HOST}/token/data.json`, {
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
