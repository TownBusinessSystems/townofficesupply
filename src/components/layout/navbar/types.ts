
export interface SubLink {
  name: string;
  path: string;
}

export interface NavLinkType {
  name: string;
  path: string;
  sublinks?: SubLink[];
}
