import { Button } from "@/components/ui/button"
import {
    Menubar
} from "@/components/ui/menubar"

export default function Navbar() {
    return (
        <Menubar className="flex items-center h-16 px-4 py-2 justify-between">
            <div>
            </div>
            <div className="flex space-x-2">
                <Button variant='reverse'>Home</Button>
                <Button variant='reverse'>Projects</Button>
                <Button variant='reverse'>Contact</Button>
            </div>
        </Menubar>
    )
}
