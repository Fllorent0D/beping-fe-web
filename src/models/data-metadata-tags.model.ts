export interface DataMetadataTagsModel {
  seoTitle: string;
  seoDescription: string;
  imageUrl: string;
}
export interface AppLinkMetadata extends DataMetadataTagsModel{
  appLink: string;
}
