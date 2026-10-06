import { Button, ButtonProps } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";

const politicalLeaders = ["City Mayor", "City Councilors", "Division Chairpersons", "Division Vice Chairpersons"];

const specifiedLeaders = [
	"Town Clerk",
	"Deputy & Division Town Clerks",
	"Assistant Town Clerks",
	"Treasurers; Deputy & Assistant Treasures",
	"Heads of Department including; Engineer, Education Officer, Community Development Officer, Education Officer; Health Officer; Engineer; Production Officer, Planner, Internal Auditor, Natural resources Officer and Chief Finance Officer",
	"Chairperson, Members and Secretary of the City Commission, City Land Board and City Contracts Committee.",
	"All Accountants, Internal Auditors and Procurement Officers of and above the rank of officer."
];

export default function EligibleLeaders({ ...props }: ButtonProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button {...props} />
			</DialogTrigger>
			<DialogContent className="space-y-2">
				<DialogHeader>
					<DialogTitle className="uppercase">Eligible Leaders</DialogTitle>
					<DialogDescription>
						The following positions are eligible for this IGG Declaration registration:
					</DialogDescription>
				</DialogHeader>
				<div className="space-y-2">
					<h3 className="text-lg font-semibold">Political Leaders</h3>
					<ul className="list-inside list-decimal">
						{politicalLeaders.map((leader, index) => (
							<li key={index}>{leader}</li>
						))}
					</ul>
				</div>
				<div className="space-y-2">
					<h3 className="text-lg font-semibold">Specified Leaders</h3>
					<ul className="list-inside list-decimal">
						{specifiedLeaders.map((leader, index) => (
							<li key={index}>{leader}</li>
						))}
					</ul>
				</div>
			</DialogContent>
		</Dialog>
	);
}
