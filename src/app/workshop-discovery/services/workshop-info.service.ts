import { Injectable } from '@angular/core';
import {forkJoin, map, Observable, switchMap} from 'rxjs';
import {WorkshopInfo} from '../model/workshop-info';
import {HttpClient} from '@angular/common/http';
import {LocationResponse, WorkshopInfoResponse} from './workshop-info.response';
import {WorkshopInfoAssembler} from './workshop-info.assembler';

@Injectable({
  providedIn: 'root'
})
export class WorkshopInfoService {

  private readonly api    = 'http://localhost:3000';
  private readonly wPath  = `${this.api}/workshops`;
  private readonly lPath  = `${this.api}/locations`;
  constructor(private http: HttpClient) {}

  /** Devuelve la lista convertida a objetos de dominio */
  getAllWorkshopsInfo(): Observable<WorkshopInfo[]> {
    return this.http.get<WorkshopInfoResponse[]>(this.wPath).pipe(
      /** 1. Obtener la lista de IDs de location sin repetir */
      switchMap(ws => {
        const ids = [...new Set(ws.map(w => w.location_id))];
        /** 2. Traer todas las ubicaciones en paralelo */
        return forkJoin(
          ids.map(id => this.http.get<LocationResponse>(`${this.lPath}?location_id=${id}`))
        ).pipe(
          /** 3. Mezclar dirección ↔ workshop */
          map(locations => {
            const locMap = new Map(
              locations.map(l => [l.location_id, l.full_address])
            );

            const enriched = ws.map(w => ({
              ...w,
              full_address: locMap.get(w.location_id) ?? 'Av. Alfonso ugarte'
            }));

            return WorkshopInfoAssembler
              .fromWorkshopInfoResponseToWorkshopInfo(enriched);
          })
        );
      })
    );
  }
}
