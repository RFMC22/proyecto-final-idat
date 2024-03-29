import { MenuProps, MenuResponse } from '../interfaces';
import { configGetCollection } from './fetchBase';
import { CollectionsConstants } from '../utils';

export async function getMenuOptions(): Promise<MenuResponse> {
  const data = await configGetCollection<MenuProps>(CollectionsConstants.MENU)
  return {data:data || []};
}
