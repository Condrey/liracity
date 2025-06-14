"use client";

import { Button } from "@/components/ui/button";
import { ChartUser, DepartmentData } from "@/lib/types";
import { FullscreenIcon, ZoomInIcon, ZoomOutIcon } from "lucide-react";
import { Tree, TreeNode } from "react-organizational-chart";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import ChartUserContainer from "./chart-user-container";

interface ChartProps {
  departments: DepartmentData[];
}

export default function Chart({ departments }: ChartProps) {
  return (
    <div className="w-full relative  rounded-md pb-6 bg-secondary/20 p-3">
      <TransformWrapper initialScale={0.5}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="overflow-y-auto scroll-auto w-full">
              <TransformComponent>
                <Tree
                  label={
                    <ChartUserContainer department="Ministry of Local Government" />
                  }
                  lineStyle="dashed"
                  lineColor="var(--color-warning)"
                  lineBorderRadius="calc(var(--spacing) * 2)"
                  nodePadding="6px"
                >
                  <TreeNode
                    label={
                      <ChartUserContainer department={"City Council (LCV)"} />
                    }
                  >
                    <TreeNode
                      label={
                        <ChartUserContainer
                          department={
                            <div>
                              <span className="underline underline-offset-4 ">
                                Statutory Bodies
                              </span>
                              <ul className="list-decimal list-inside text-start  ">
                                <li className="list-item flex-none shrink-0 flex-nowrap text-nowrap">
                                  City service Commission
                                </li>
                                <li className="list-item">
                                  City Land Management Board
                                </li>
                              </ul>
                            </div>
                          }
                        />
                      }
                    />
                    <TreeNode
                      label={
                        <ChartUserContainer
                          department={"Town clerk"}
                          user={townClerk}
                        />
                      }
                    >
                      <TreeNode
                        label={
                          <ChartUserContainer department={"Internal Audit"} />
                        }
                      />
                      <TreeNode label="">
                        <TreeNode
                          label={
                            <ChartUserContainer
                              department={"Health Services"}
                            />
                          }
                        />
                        <TreeNode
                          label={
                            <ChartUserContainer
                              department={"Works & Engineering"}
                            />
                          }
                        />
                        <TreeNode
                          label={
                            <ChartUserContainer
                              department={"Education & Sports"}
                            />
                          }
                        />
                        <TreeNode
                          label={
                            <ChartUserContainer
                              department={"Physical Planning & Housing"}
                            />
                          }
                        />
                        <TreeNode
                          label={
                            <ChartUserContainer
                              department={"Natural Resources & Environment"}
                            />
                          }
                        />
                        <TreeNode
                          label={
                            <ChartUserContainer
                              department={"Agriculture & production"}
                            />
                          }
                        />
                        <TreeNode
                          label={
                            <ChartUserContainer
                              department={"Trade, Industry & Investment"}
                            />
                          }
                        />
                        <TreeNode
                          label={
                            <ChartUserContainer
                              department={"Gender & Social Development"}
                            />
                          }
                        />
                        <TreeNode
                          label={
                            <ChartUserContainer department={"City Treasury"} />
                          }
                        />
                        <TreeNode
                          label={
                            <ChartUserContainer
                              department={"Planning, Projects & Grants"}
                            />
                          }
                        />
                        <TreeNode label="">
                          <TreeNode
                            label={
                              <ChartUserContainer
                                department={"Revenue Generation"}
                              />
                            }
                          />
                          <TreeNode
                            label={
                              <ChartUserContainer
                                department={"Procurement & Disposal"}
                              />
                            }
                          />
                          <TreeNode
                            label={
                              <ChartUserContainer
                                department={"Human Resource Management"}
                              />
                            }
                          />
                          <TreeNode
                            label={
                              <ChartUserContainer
                                department={"Legal Services"}
                              />
                            }
                          />
                        </TreeNode>
                      </TreeNode>
                      <TreeNode
                        label={
                          <ChartUserContainer
                            department={"Deputy Town Clerk"}
                          />
                        }
                      >
                        <TreeNode
                          label={
                            <ChartUserContainer department={"Administration"} />
                          }
                        />
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </Tree>
              </TransformComponent>
            </div>
            <div className="absolute top-5 space-x-2 ">
              <Button
                onClick={() => zoomIn()}
                size={"icon"}
                variant={"secondary"}
              >
                <ZoomInIcon />
              </Button>
              <Button
                onClick={() => zoomOut()}
                size={"icon"}
                variant={"secondary"}
              >
                <ZoomOutIcon />
              </Button>
              <Button
                onClick={() => resetTransform()}
                size={"icon"}
                variant={"secondary"}
              >
                <FullscreenIcon />
              </Button>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
const townClerk: ChartUser = {
  id: "town_clerk",
  avatarUrl: null,
  email: "town-clerk@liracity.go.ug",
  endedOffice: null,
  hierarchy: 1,
  name: "Okurut Vincent",
  position: "City Town Clerk",
  resumedOffice: 2023,
  telephone: "+256776239674",
  title: null,
  isVerified: true,
};
