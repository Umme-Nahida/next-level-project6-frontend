import type { ComponentType } from "react";

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "RIDER" | "DRIVER";

export const role = {
  superAdmin: "SUPER_ADMIN",
  admin: "ADMIN",
  driver: "DRIVER",
  rider: "RIDER",
};

export interface RideCardProps {
  ride: {
    _id: string
    pickupLocation: {
      address: string
      lat: string
      lng: string
    }
    destinationLocation: {
      address: string
      lat: string
      lng: string
    }
    paymentMethod: string
    status: string
    fare: number
    timestampsHistory: {
      requestedAt: string
      acceptedAt: string
    }
    rider: {
      _id: string
      name: string
      email: string
      role: string
      isActive: boolean
    }
    driver: {
      name: string
      email: string
      isActive: string
      vehicleInfo: {
        vehicle_type: string
        vehicle_number: string
        license_number: string
        seats_available: string
        vehicle_model: string
        vehicle_color: string
      }
    }
  }
}