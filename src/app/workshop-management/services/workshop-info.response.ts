// workshop-info.response.ts
export interface WorkshopInfoResponse {
  workshop_id:   string;
  name:          string;
  description:   string;
  image:         string;
  contact_phone: string;
  location_id:   string;      // ← ID para buscar la dirección
  full_address: string;
}

// location.response.ts
export interface LocationResponse {
  location_id:  string;
  full_address: string;
}
