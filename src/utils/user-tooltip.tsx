"use client";

import Link from "next/link";
import { PropsWithChildren } from "react";
import Linkify from "./linkify";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { useSession } from "@/lib/session-provider";
import { UserDataSelect } from "@/lib/types";
import UserAvatar from "./user-avatar";

interface UserTooltipProps extends PropsWithChildren {
	user: UserDataSelect;
}

export default function UserTooltip({ user, children }: UserTooltipProps) {
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const userDetailsUrl = getNavigationLinkWithPathnameWithoutUpdate(`/users/${user.username}`);
	const { user: loggedInUser } = useSession();
	//   const followerState: FollowerInfo = {
	//     followersCount: user._count.followers,
	//     isFollowingByUser: !!user.followers.some(
	//       ({ followerId }) => followerId === loggedInUser.id,
	//     ),
	//   };
	return (
		<TooltipProvider key={user.id}>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent className="outline">
					<div className="flex max-w-80 flex-col gap-3 px-1 py-2.5 break-words md:min-w-52">
						<div className="flex items-center justify-between gap-2">
							<Link href={userDetailsUrl}>
								<UserAvatar size={70} image={user.image} />
							</Link>
							{/* {loggedInUser.id !== user.id && (
                <FollowButton userId={user.id} initialState={followerState} />
              )} */}
						</div>
						<div>
							<Link href={userDetailsUrl}>
								<div className="text-lg font-semibold hover:underline">{user.name || user.username || user.email}</div>
								<div className="">@{user.username}</div>
							</Link>
						</div>
						{user.bio && (
							<Linkify>
								<div className="line-clamp-4 whitespace-pre-line">{user.bio}</div>
							</Linkify>
						)}

						{/* <FollowerCount userId={user.id} initialState={followerState} /> */}
					</div>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
