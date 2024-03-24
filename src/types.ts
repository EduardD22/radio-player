export interface Radio {
  id: number;
  name: string;
  logo: string;
  slogan?: string;
  website?: string;
  email?: string;
  phone?: string;
  social_contacts?: string;
  country: {
    id: string;
    name: string;
    id_continent: string;
  };
  streams: {
    id: number;
    url: string;
    bitrate: string;
    is_video: boolean;
    is_online: boolean;
  }[];
}

export interface RadioResponse {
  count: number;
  items: Radio[];
}
