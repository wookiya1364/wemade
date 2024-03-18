import { HOST } from "@shared/util";
import { useQuery } from "@tanstack/react-query";

export default function useHighlight() {
    const { data, isPending, error } = useQuery<TVideoGallery[]>({
        queryKey: ['highlight'],
        queryFn: () => fetch(`${HOST}/highlight/data.json`, {
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
