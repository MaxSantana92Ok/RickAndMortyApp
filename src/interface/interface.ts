export interface Request_props {
  n?: number;
}

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}
export interface App_Store {
  list: Result[];
  page: Info;
  character1: Result | null;
  character2: Result | null;
}
