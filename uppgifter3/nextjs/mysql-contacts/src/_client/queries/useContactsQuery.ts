import { useEffect, useState } from "react";

export type ContactType = {
    id: number,
    name: string,
    email: string,
    phonenumber: string
}

const useContactsQuery = () => {
    const [data, setData] = useState<ContactType[] | null>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        load();
    }, [])

    const load = async () => {
        setIsLoading(true);
        const res: Response = await fetch("/api/contacts");
        const data = await res.json();
        setData(data);
        setIsLoading(false)
    }

    return {data, isLoading, load};
}

export default useContactsQuery;