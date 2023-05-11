import { Packages } from "../types";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  contact_preference?: string[];
  photos: Array<string | Blob>;
  project_type: string;
  project_level: string;
  additional_info: string;
  contractor: boolean;
  package: Packages | undefined;
}

interface Photo {
  attributes: PhotoAttributes;
  id: number;
}

interface PhotoAttributes {
  url: string;
}

export interface Inquiriy {
  id: number;
  attributes: Omit<FormData, "photos"> & {
    photos: { data: Array<Photo> };
  };
}
