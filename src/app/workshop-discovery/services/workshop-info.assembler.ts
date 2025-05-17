import {WorkshopInfoResponse} from './workshop-info.response';
import {WorkshopInfo} from '../model/workshop-info';

export class WorkshopInfoAssembler {
  static fromWorkshopInfoResponseToWorkshopInfo(workshops: WorkshopInfoResponse[]): WorkshopInfo[] {
    return workshops.map((item: WorkshopInfoResponse)=> this.fromWorkshopInfoItemToWorkshopInfo(item));
  }
  /** DTO → Dominio */
  static fromWorkshopInfoItemToWorkshopInfo(item: WorkshopInfoResponse): WorkshopInfo {
    return new WorkshopInfo(
      item.workshop_id,
      item.name,
      item.description,
      item.image,
      item.contact_phone,
      item.full_address
    );
  }
}
