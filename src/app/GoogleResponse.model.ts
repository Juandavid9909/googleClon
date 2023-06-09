export interface GoogleResponse {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items?: (ItemsEntity)[] | null;
}
export interface Url {
  type: string;
  template: string;
}
export interface Queries {
  request?: (RequestEntityOrNextPageEntity)[] | null;
  nextPage?: (RequestEntityOrNextPageEntity)[] | null;
}
export interface RequestEntityOrNextPageEntity {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}
export interface Context {
  title: string;
}
export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}
export interface ItemsEntity {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId?: string | null;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}
export interface Pagemap {
  metatags?: any[] | null;
  cse_image?: (CseImageEntity)[] | null;
  cse_thumbnail?: (CseThumbnailEntity)[] | null;
  imageobject?: (ImageobjectEntity)[] | null;
  person?: (PersonEntity)[] | null;
  interactioncounter?: (InteractioncounterEntity)[] | null;
  videoobject?: (VideoobjectEntity)[] | null;
  collection?: (CollectionEntity)[] | null;
  creativework?: (CreativeworkEntity)[] | null;
  socialmediaposting?: (SocialmediapostingEntity)[] | null;
  hcard?: (HcardEntity)[] | null;
}
export interface CseImageEntity {
  src: string;
}
export interface CseThumbnailEntity {
  src: string;
  width: string;
  height: string;
}
export interface ImageobjectEntity {
  contenturl: string;
  width: string;
  caption: string;
  thumbnailurl: string;
}
export interface PersonEntity {
  identifier: string;
  givenname: string;
  additionalname: string;
  disambiguatingdescription?: string | null;
}
export interface InteractioncounterEntity {
  userinteractioncount: string;
  interactiontype: string;
  name: string;
  url: string;
}
export interface VideoobjectEntity {
  duration: string;
  embedurl: string;
  contenturl: string;
  uploaddate: string;
  name: string;
  description: string;
  caption: string;
  thumbnailurl: string;
}
export interface CollectionEntity {
  name: string;
}
export interface CreativeworkEntity {
  name: string;
  url: string;
}
export interface SocialmediapostingEntity {
  identifier: string;
  position?: string | null;
  datecreated: string;
  datepublished: string;
  commentcount?: string | null;
  articlebody?: string | null;
  isbasedon?: string | null;
  url?: string | null;
  ispartof?: string | null;
}
export interface HcardEntity {
  url_text?: string | null;
  bday: string;
  fn: string;
  nickname?: string | null;
  logo?: string | null;
  label: string;
  category: string;
  url?: string | null;
  note?: string | null;
}
