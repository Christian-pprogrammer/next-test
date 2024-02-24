export interface BannerItem {
    mainBannerId: number,
    title: string,
    sort: number,
    pcImageUrl: string,
    mobileImageUrl: string,
    linkUrl: string,
    startDate: string,
    endDate: string,
    creator: string,
    updater: string,
    deleter: any,
    createdAt: string,
    updatedAt: string,
    deletedAt: any
}

export interface ShortCutDataElement {
  mainShortCutId: number,
  title: string,
  sort: number,
  imageUrl: string,
  linkUrl: string,
  creator: string,
  updater: string,
  deleter: any,
  createdAt: string,
  updatedAt: string,
  deletedAt: any
}

interface Thumbnail {
  createdAt: string,
  updatedAt: string,
  deletedAt: any,
  uuid: string,
  mimeType: string,
  uri: string,
  fileName: string,
  objectKey: string,
  deviceType: any,
  collectionId: number,
  seq: number,
  itemKey: any,
  type: string
}


export interface CollectionType {
    id: number,
    type: string,
    code: string,
    title: string,
    subtitle: string,
    description: string,
    trialPeriod: any,
    installmentPrice: any,
    installmentPeriod: any,
    rating: number,
    startDate: any,
    endDate: any,
    viewType: any,
    createdAt: string,
    items: Array<any>,
    media: Array<any>,
    thumbnail: Thumbnail,
    taggings: Array<any>,
    singleCollections: Array<any>

}