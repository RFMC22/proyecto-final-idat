import { CollectionsConstants } from "../utils";
import { configGetCollection } from "./fetchBase";

export async function getLocales() {
  const data = await configGetCollection(CollectionsConstants.LOCALES);
  return {data: data ?? []}
}