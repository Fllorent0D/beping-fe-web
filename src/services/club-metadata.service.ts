import { Injectable } from "@nestjs/common";
import { ClubsService } from "../tabt-client";
import { AppLinkMetadata, DataMetadataTagsModel } from "../models/data-metadata-tags.model";
import { firstValueFrom } from "rxjs";
import { seoConstant } from "../const/seo-constant";

@Injectable()
export class ClubMetadataService {

  constructor(
    private readonly clubService: ClubsService
  ) {
  }

  async getClubMetadata(uniqueIndex: string): Promise<AppLinkMetadata> {
    try {
      const { data: club } = await firstValueFrom(this.clubService.findClubById(uniqueIndex));
      return {
        seoTitle: club.LongName,
        seoDescription: "Retrouvez tous les infos de " + club.Name + " sur BePing",
        imageUrl: "",
        appLink: "https://beping.be/club/" + uniqueIndex
      };
    } catch (e) {
      return seoConstant;
    }

  }


}
