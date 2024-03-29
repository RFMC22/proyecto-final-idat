import { Complemento, ComplementoResponse } from "../interfaces";
import { configGetCollection } from "./fetchBase";
import { CollectionsConstants } from "../utils";

export async function getComplementos(): Promise<ComplementoResponse> {
    const data = await configGetCollection<Complemento>(CollectionsConstants.COMPLEMENTOS);
    return {data:data ?? []};
}