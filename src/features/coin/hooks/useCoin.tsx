import { HOST } from "@shared/util";
import { useQuery } from "@tanstack/react-query";

export default function useCoin() {
    const { data, isPending, error } = useQuery<TCoin[]>({
        queryKey: ['coin'],
        queryFn: () => fetch(`${HOST}/coin/data.json`, {
            method: "GET",
        }).then(res => res.json())
    });

    return {
        data,
        isPending,
        error,
    }
}
