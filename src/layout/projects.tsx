import { Card } from "@/components/ui/card";
import { Menubar } from "@/components/ui/menubar";
import fave_logo from "../assets/fave_logo.png";

export default function Projects() {
    return (
        <Menubar className="block h-auto mt-4 p-4 relative">
            <h1 className="text-2xl mb-4">Projects:</h1>
            <div className="flex flex-col gap-2 md:flex items-center justify-between gap-6">
                <Card className="w-full p-0 gap-2 pb-2">
                    <div className="bg-[#5e6dff] w-full h-40 flex justify-center items-center">
                        <img src={fave_logo} alt="Fave Logo" height={100} width={100} />
                    </div>
                    <p className="px-2 text-lg">Fave integration test suite:</p>
                    <p className="px-2">Set up the main integration test suite for the fave application.
                        This includes setting up a local server, mocking out authentication, payments, registrations and much more.
                    </p>
                </Card>
                <Card className="w-full p-0 gap-2 pb-2">
                    <div className="bg-[#121212] w-full h-40 flex justify-center items-center ">
                        <p className="text-2xl text-white">emotion.</p>
                    </div>
                    <p className="px-2 text-lg">Emotion:</p>
                    <p className="px-2">A react native app to help keep a track of your emotions daily
                        and take a look back on how you've been feeling these past few days.
                    </p>
                </Card>
            </div>
        </Menubar>
    )
}
