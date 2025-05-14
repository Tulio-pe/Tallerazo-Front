export interface VehicleTracking {
  trackingNumber: string
  vehicleInfo: {
    plateNumber: string
    model: string
    make: string
    year: string
  }
  repairInfo: {
    type: string
    startDate: string
    notes: string
  }
  repairStates: RepairState[]
}

export interface RepairState {
  id: number
  title: string
  description: string
  imageUrl: string
  completed: boolean
}
