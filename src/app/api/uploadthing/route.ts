import { createRouteHandler } from "uploadthing/next";
import { UTApi } from "uploadthing/server";
import { appFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
	router: appFileRouter
});

export const utAPi = new UTApi();
