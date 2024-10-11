import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

export function NavigationBar() {
  return (
    <NavigationMenu className="flex flex-row justify-between min-w-full list-none h-16 sticky top-0 p-5">
      <div className="flex flex-row">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Image src={Logo} height="20" width="50" alt="logo" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/quiz" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Quiz
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about-me" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </div>
      <div className="flex gap-4">
        <ModeToggle />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </NavigationMenu>
  );
}
