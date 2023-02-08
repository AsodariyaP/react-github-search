import { useEffect, useState } from 'react';
import { useSearchUsersQuery } from "../features/github.api";
import { useThrottle } from "../hooks/throttle";
import RepoDetails from "../components/RepoDetails";

function Home() {
    const [dropdown, setDropdown] = useState(false)
    const [search, setSearch] = useState('')
    const throttled = useThrottle(search, 600)

    const { isLoading, isError, data } = useSearchUsersQuery(throttled, {
        skip: throttled.length < 3,
        refetchOnFocus: true
    })

    useEffect(() => {
        setDropdown(throttled.length > 3 && data?.length! > 0)
    }, [throttled, data])

    return (
        <div className={"flex justify-center pt-10 mx-auto h-screen w-screen"}>
            <div className={"relative w-[560px]"}>
                <input
                    type={"text"}
                    autoFocus
                    className={"border py-2 px-4 w-full h-[42px] mb-2"}
                    placeholder={"Search for Github repository..."}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                {isError && <p className={"text-center text-red-600"}>Getting error from api...</p>}
                {
                    dropdown && (
                        <div className={"container"}>
                            {isLoading && <p className={"text-center"}>Repositories are loading...</p>}
                            {data?.map(repo => (
                                <RepoDetails repo={repo} key={repo.id} />
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Home;