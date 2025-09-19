import { Button } from "@/components/ui/button";
import { Menubar } from "@/components/ui/menubar";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <Menubar className="block h-auto mt-4 p-4 relative">
            <h1 className="text-2xl mb-4">Get in touch!</h1>
            <div className="flex flex-col gap-2 md:flex gap-2">
                <a href="https://github.com/shaik-aaron" target="_blank">
                    <Button className="bg-background">
                        <Github /> Github
                    </Button>
                </a>
                <a href="https://www.linkedin.com/in/shaik-aaron/" target="_blank">
                    <Button className="bg-background">
                        <Linkedin /> Linkedin
                    </Button>
                </a>
                <a href="https://x.com/_shaikaaron_" target="_blank">
                    <Button className="bg-background">
                        <Twitter /> Twitter
                    </Button>
                </a>
            </div>
        </Menubar>
    )
}
