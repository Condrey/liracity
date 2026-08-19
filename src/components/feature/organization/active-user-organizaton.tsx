"use client";
import logo from "@/assets/logo_portrait.png";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import UserAvatar from "@/utils/user-avatar";
import { zodResolver } from "@hookform/resolvers/zod";
import { Organization } from "better-auth/plugins";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export function ActiveUserOrganization() {
	const [open, setOpen] = useState(false);
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const schema = z.object({
		organizationId: z.string().min(1, "Please choose an organization.")
	});
	type Schema = z.infer<typeof schema>;

	const { data: activeOrganization } = authClient.useActiveOrganization();
	const { data: organizations } = authClient.useListOrganizations();

	const form = useForm<Schema>({
		resolver: zodResolver(schema),
		values: { organizationId: activeOrganization?.id || "" }
	});

	function onSubmit({ organizationId }: Schema) {
		setOpen(false);
		startTransition(async () => {
			const { error } = await authClient.organization.setActive({
				organizationId
			});
			if (error)
				toast.error("Error Switching Organization", {
					description: error.message || "Could not switch organization"
				});
			router.refresh();
		});
	}

	if (!organizations) return null;
	if (organizations.length === 1 || !activeOrganization) {
		return !activeOrganization ? null : (
			<div className="flex aspect-square size-full max-h-40 flex-col items-center px-3 py-4">
				<Image
					src={activeOrganization.logo || logo}
					alt="logo"
					width={150}
					height={150}
					className="size-full bg-cover dark:brightness-0 dark:invert"
				/>
			</div>
		);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="organizationId"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Organization</FormLabel>
							<Popover open={open} onOpenChange={setOpen}>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant="outline"
											role="combobox"
											type="button"
											aria-expanded={open}
											className="w-full max-w-(--sidebar-width) justify-between"
										>
											{field.value ? (
												<ChosenOrganizationCommandItem
													organization={organizations.find((organization) => organization.id === field.value)!}
													isPending={isPending}
												/>
											) : (
												"Choose organization..."
											)}
											<ChevronsUpDownIcon className="opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-fit p-0">
									<Command>
										<CommandInput placeholder={"Search organization..."} className="h-9" />
										<CommandList>
											<CommandEmpty className="space-y-3">
												<span className="block">No such organization found.</span>
											</CommandEmpty>
											<CommandGroup>
												{organizations.map((organization) => {
													// eslint-disable-next-line @typescript-eslint/no-unused-vars
													const { id, createdAt, ...shreddedOrganization } = organization;
													const value = (Object.values(shreddedOrganization).filter(Boolean) as string[]).join(", ");
													return (
														<CommandItem
															key={organization.id}
															value={value}
															onSelect={(currentValue) => {
																console.log({ currentValue });
																form.setValue("organizationId", organization.id);
																form.clearErrors("organizationId");
																form.handleSubmit(onSubmit)();
															}}
														>
															<CommandItemOrganization
																organization={organization}
																isChecked={field.value === organization.id}
																className="w-full p-1"
															/>
														</CommandItem>
													);
												})}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}

function ChosenOrganizationCommandItem({
	organization: { name, logo },
	isPending
}: {
	organization: Organization;
	isPending: boolean;
}) {
	return (
		<div className="flex w-full items-center justify-start gap-2">
			{isPending && <Spinner />}
			<span className="line-clamp-1 text-ellipsis">{name}</span>
		</div>
	);
}

function CommandItemOrganization({
	organization: { name, logo, slug },
	isChecked,
	className
}: {
	organization: Organization;
	isChecked: boolean;
	className?: string;
}) {
	return (
		<div className={cn("flex w-full gap-2", isChecked && "font-bold text-secondary-foreground", className)}>
			<UserAvatar image={logo} />
			<div className="flex flex-col">
				<span>{name}</span>
				<span className="text-xs text-muted-foreground">{slug}</span>
			</div>
			{isChecked && <CheckIcon />}
		</div>
	);
}
