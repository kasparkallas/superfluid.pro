import config from "@payload-config";
import { getPayload } from "payload";

// TODO: should lifecycle be handled here somehow?
export const payload = await getPayload({ config });
