import { HOST } from "@shared/util";
import { useQuery } from "@tanstack/react-query";

export default function useGame() {
    return useQuery<TGame[]>({
        queryKey: ['game'],
        queryFn: () => fetch(`${HOST}/game/data.json`, {
            method: "GET",
        }).then(res => res.json()),
        staleTime: 1000 * 60,
    });
}
