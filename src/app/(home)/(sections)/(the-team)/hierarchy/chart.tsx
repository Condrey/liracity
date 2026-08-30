"use client";

import { ChartUser } from "@/lib/types";
import { Tree, TreeNode } from "react-organizational-chart";
import ChartUserContainer from "./chart-user-container";

interface ChartProps {}

export default function Chart({}: ChartProps) {
	return (
		<div className="relative w-full rounded-md bg-secondary/50 py-3 pb-6">
			<div className="w-full overflow-y-auto scroll-auto">
				<Tree
					label={<ChartUserContainer department="Ministry of Local Government" />}
					lineStyle="dashed"
					lineColor="var(--color-warning)"
					lineBorderRadius="calc(var(--spacing) * 2)"
					nodePadding="6px"
				>
					<TreeNode label={<ChartUserContainer department={"Mayor"} />}>
						<TreeNode
							label={
								<ChartUserContainer
									department={
										<div>
											<span className="underline underline-offset-4">Statutory Bodies</span>
											<ul className="min-w-36 list-inside list-decimal text-start">
												<li className="list-item">City service Commission</li>
												<li className="list-item">City Land Management Board</li>
											</ul>
										</div>
									}
								/>
							}
						/>
						<TreeNode label={<ChartUserContainer department={"Town clerk"} />}>
							<TreeNode label={<ChartUserContainer department={"Internal Audit"} />} />
							<TreeNode label="">
								<TreeNode label={<ChartUserContainer department={"Health Services"} />} />
								<TreeNode label={<ChartUserContainer department={"Works & Engineering"} />} />
								<TreeNode label={<ChartUserContainer department={"Education & Sports"} />} />
								<TreeNode label={<ChartUserContainer department={"Physical Planning & Housing"} />} />
								<TreeNode label={<ChartUserContainer department={"Natural Resources & Environment"} />} />
								<TreeNode label={<ChartUserContainer department={"Agriculture & production"} />} />
								<TreeNode label={<ChartUserContainer department={"Trade, Industry & Investment"} />} />
								<TreeNode label={<ChartUserContainer department={"Gender & Social Development"} />} />
								<TreeNode label={<ChartUserContainer department={"City Treasury"} />} />
								<TreeNode label={<ChartUserContainer department={"Planning, Projects & Grants"} />} />
								<TreeNode label="">
									<TreeNode label={<ChartUserContainer department={"Revenue Generation"} />} />
									<TreeNode label={<ChartUserContainer department={"Procurement & Disposal"} />} />
									<TreeNode label={<ChartUserContainer department={"Human Resource Management"} />} />
									<TreeNode label={<ChartUserContainer department={"Legal Services"} />} />
								</TreeNode>
							</TreeNode>
							<TreeNode label={<ChartUserContainer department={"Deputy Town Clerk"} />}>
								<TreeNode label={<ChartUserContainer department={"Administration"} />} />
							</TreeNode>
						</TreeNode>
					</TreeNode>
				</Tree>
			</div>
		</div>
	);
}
const townClerk: ChartUser = {
	id: "town_clerk",
	image: null,
	email: "town-clerk@liracity.go.ug",
	endedOffice: null,
	hierarchy: 1,
	name: "Okurut Vincent",
	position: "City Town Clerk",
	resumedOffice: 2024,
	telephone: "+256776239674",
	title: null,
	isVerified: true
};
