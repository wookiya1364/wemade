import { HOST } from "@shared/util";
import { useQuery } from "@tanstack/react-query";

export default function useIcarus() {
    const { data, isPending, error } = useQuery<TGallery[]>({
        queryKey: ['icarus'],
        queryFn: () => fetch(`${HOST}/icarus/data.json`, {
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
