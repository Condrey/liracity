"use client";

import { ChartUser, DepartmentData } from "@/lib/types";
import { Tree, TreeNode } from "react-organizational-chart";
import ChartUserContainer from "./chart-user-container";

interface ChartProps {
  departments: DepartmentData[];
}

export default function Chart({ departments }: ChartProps) {
  return (
    <div className="w-full overflow-y-auto scroll-auto rounded-md pb-6 bg-secondary/20 p-3">
      <Tree
        label={<ChartUserContainer user={mayor} />}
        lineStyle="dashed"
        lineColor="var(--color-warning)"
        lineBorderRadius="calc(var(--spacing) * 2)"
        nodePadding="6px"
      >
        <TreeNode label={<ChartUserContainer user={mayor} />} />
        <TreeNode label={<ChartUserContainer user={mayor} />}>
          <TreeNode label={<ChartUserContainer user={mayor} />} />
          <TreeNode label={<ChartUserContainer user={mayor} />} />
          <TreeNode label={<ChartUserContainer user={mayor} />} />
          <TreeNode label={<ChartUserContainer user={mayor} />} />
          <TreeNode label={<ChartUserContainer user={mayor} />} />
        </TreeNode>
        <TreeNode label={<ChartUserContainer user={mayor} />} />
        <TreeNode label={<ChartUserContainer user={mayor} />} />
        <TreeNode label={<ChartUserContainer user={mayor} />} />
        <TreeNode label={<ChartUserContainer user={mayor} />} />
        <TreeNode label={<ChartUserContainer user={mayor} />} />
      </Tree>
    </div>
  );
}
const mayor: ChartUser = {
  id: "mayor",
  avatarUrl: null,
  email: "mayor@liracity.go.ug",
  endedOffice: null,
  hierarchy: 1,
  name: "Atul Sam",
  position: "Lira City Mayor",
  resumedOffice: 2023,
  telephone: "+256776239674",
  title: null,
  isVerified: true,
};

const data = {
  name: "Alice Johnson",
  attributes: {
    title: "CEO",
    department: "Executive",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  children: [
    {
      name: "Bob Smith",
      attributes: {
        title: "CTO",
        department: "Technology",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      children: [
        {
          name: "Charlie Brown",
          attributes: {
            title: "Dev Team Lead",
            department: "Technology",
            photo: "https://randomuser.me/api/portraits/men/76.jpg",
          },
        },
        {
          name: "Daisy Clark",
          attributes: {
            title: "QA Manager",
            department: "Technology",
            photo: "https://randomuser.me/api/portraits/women/65.jpg",
          },
        },
      ],
    },
    {
      name: "Eva Green",
      attributes: {
        title: "CFO",
        department: "Finance",
        photo: "https://randomuser.me/api/portraits/women/12.jpg",
      },
    },
    {
      name: "Frank Wright",
      attributes: {
        title: "COO",
        department: "Operations",
        photo: "https://randomuser.me/api/portraits/men/41.jpg",
      },
    },
  ],
};
