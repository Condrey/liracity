"use client";

import { DepartmentData } from "@/lib/types";
import { useEffect, useRef, useState } from "react";
import  { Tree,TreeNode,TreeNodeProps,TreeProps, } from "react-organizational-chart";


interface ChartProps {
  departments: DepartmentData[];
}

export default function Chart({ departments }: ChartProps) {
 


  
  return (
  <div>
    <Tree label='Mayor' lineStyle="dashed" lineColor="var(--color-muted-foreground)" nodePadding="6px"  >
      <TreeNode label={'Town Clerk'}>shoot</TreeNode>
    </Tree>

  </div>
  );
}

const data = {
  name: 'Alice Johnson',
  attributes: {
    title: 'CEO',
    department: 'Executive',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  children: [
    {
      name: 'Bob Smith',
      attributes: {
        title: 'CTO',
        department: 'Technology',
        photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      children: [
        {
          name: 'Charlie Brown',
          attributes: {
            title: 'Dev Team Lead',
            department: 'Technology',
            photo: 'https://randomuser.me/api/portraits/men/76.jpg',
          },
        },
        {
          name: 'Daisy Clark',
          attributes: {
            title: 'QA Manager',
            department: 'Technology',
            photo: 'https://randomuser.me/api/portraits/women/65.jpg',
          },
        },
      ],
    },
    {
      name: 'Eva Green',
      attributes: {
        title: 'CFO',
        department: 'Finance',
        photo: 'https://randomuser.me/api/portraits/women/12.jpg',
      },
    },
    {
      name: 'Frank Wright',
      attributes: {
        title: 'COO',
        department: 'Operations',
        photo: 'https://randomuser.me/api/portraits/men/41.jpg',
      },
    },
  ],
};

