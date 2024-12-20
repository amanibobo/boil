import { socialMediaLinks } from "@/utils/constants";
import { Button } from "./ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Footer() {
    return (
        <>
        <div className="flex flex-col pb-3 text-muted-foreground">
            <div>
                {/*logo */}
                {/*email */}
            </div>

        <div className="flex flex-col items-center justify-between gap-2.5 border-t py-3.5 text-neutral-500 dark:text-neutral-400 sm:flex-row-reverse">
        {/* Social media links */}
        <div className="-mr-2 flex items-center gap-1">
        <Link href="mailto:hello@voltient.com"><p className="text-sm">name@placeholder.com</p></Link>
          {socialMediaLinks.map(({ icon: Icon, link }) => (
            <Button
              key={link}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
          <ThemeToggle />
        </div>
        <span className="text-sm">
          &copy; {new Date().getFullYear()} Made by Amani 🐝
        </span>
      </div>
        </div>
        </>
    )
}