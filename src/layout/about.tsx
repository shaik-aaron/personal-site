import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card"
import {
    Menubar
} from "@/components/ui/menubar"
import { getCurrentPlaying, getRecentTracks, refreshToken } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function About() {

    const [currentPlaying, setCurrentPlaying] = useState<any | null>("");
    const [recentTracks, setRecentTracks] = useState<any | null>("");
    const [loading, setLoading] = useState<boolean>(true);

    const jobs = ["Software Engineer", "QA Automation Specialist"];
    const freeTime = ["Gaming", "Running", "Singing", "Doing absolutely nothing"];

    useEffect(() => {
        async function fetchTrack() {
            try {
                setLoading(true);
                await refreshToken();
                const currentPlaying = await getCurrentPlaying();
                if ('message' in currentPlaying && currentPlaying.message === "No track currently playing") {
                    const latestTrack = await getRecentTracks();
                    setRecentTracks(latestTrack);
                    setLoading(false);
                } else {
                    setCurrentPlaying(currentPlaying);
                    setLoading(false);
                }
            } catch (error) {
            }
        }
        fetchTrack();
    }, []);

    return (
        <Menubar className="block h-auto mt-4 p-4 relative">
            <div className="absolute right-2">
                <Card className="h-auto p-2">
                    <p>What I'm listening to right now:</p>
                    {loading ? <p>Hmmm...</p> : <div className="flex justify-start gap-4">
                        <img src={currentPlaying?.item?.album?.images?.[2]?.url || recentTracks?.track?.album?.images?.[2]?.url} alt={currentPlaying?.item?.name || recentTracks?.track?.name} />
                        <div className="flex flex-col justify-between">
                            <p>{currentPlaying?.item?.name || recentTracks?.track?.name}</p>
                            <hr />
                            <p>{currentPlaying?.item?.artists?.[0]?.name || recentTracks?.track?.artists?.[0]?.name}</p>
                        </div>
                    </div>}
                </Card>
            </div>
            <h1 className="text-2xl mb-4">Hello! I'm Aaron!</h1>
            <p className="text-xl mb-1">And I am a:</p>
            <div className="text-lg">
                <ul className="list-disc list-inside flex gap-2">
                    {jobs.map((job) => (
                        <Badge key={job} variant="neutral" className="bg-background shadow-shadow text-sm">{job}</Badge>
                    ))}
                </ul>
            </div >
            <div className="text-lg mt-4">
                <p className="text-lg mb-1">In my free time, you'll find me either:</p>
                <ul className="list-disc list-inside flex gap-2">
                    {freeTime.map((time) => (
                        <Badge key={time} variant="neutral" className="bg-background shadow-shadow text-sm">{time}</Badge>
                    ))}
                </ul>
            </div>
        </Menubar >
    )
}
