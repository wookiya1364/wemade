import { HOST } from "@shared/util";
import { useQuery } from "@tanstack/react-query";

export default function useEveryfarm() {
    const { data, isPending, error } = useQuery<TGallery[]>({
        queryKey: ['everyfarm'],
        queryFn: () => fetch(`${HOST}/everyfarm/data.json`, {
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
