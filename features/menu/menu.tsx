import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { BarChartHorizontalBig } from "lucide-react";
import Link from "next/link";
import { UserProfile } from "../user-profile";

export const MainMenu = () => {
  return (
    <div className="flex gap-3 flex-col justify-between">
      <div>
        <Link
          href="/"
          className="w-10 h-10 items-center justify-center flex"
          title="Home"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/ai-icon.png" />
          </Avatar>
        </Link>
        <Link
          href="/"
          className="w-0 h-0 p-0 items-center justify-center flex border rounded-full"
          title="Reporting"
        >
          <BarChartHorizontalBig size={0}/>
        </Link>
      </div>
      <UserProfile />
    </div>
  );
};
