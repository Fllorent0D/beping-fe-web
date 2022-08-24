import { Injectable } from "@nestjs/common";
import { DivisionsService } from "../tabt-client";
import { AppLinkMetadata } from "../models/data-metadata-tags.model";
import { firstValueFrom } from "rxjs";
import { seoConstant } from "../const/seo-constant";

@Injectable()
export class DivisionMetadataService {

  constructor(
    private readonly divisionsService: DivisionsService
  ) {
  }

  async getDivisionMetadata(uniqueIndex: string): Promise<AppLinkMetadata> {
    try {
      const { data: division } = await firstValueFrom(this.divisionsService.findDivisionById(Number(uniqueIndex)));
      return {
        seoTitle: division.DivisionName,
        seoDescription: "Retrouvez toutes les infos de " + division.DivisionName + " sur BePing",
        imageUrl: "",
        appLink: "beping://beping.be/division/" + uniqueIndex
      };
    } catch (e) {
      return seoConstant;
    }

  }


}
