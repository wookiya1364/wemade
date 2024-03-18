import { HOST } from "@shared/util";
import { useQuery } from "@tanstack/react-query";

export default function useNightcrow() {
    const { data, isPending, error } = useQuery<TGallery[]>({
        queryKey: ['nightcrow'],
        queryFn: () => fetch(`${HOST}/nightcrow/data.json`, {
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
