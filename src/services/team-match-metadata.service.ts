import { Injectable } from "@nestjs/common";
import { MatchesService } from "../tabt-client";
import { AppLinkMetadata } from "../models/data-metadata-tags.model";
import { firstValueFrom } from "rxjs";
import { seoConstant } from "../const/seo-constant";

@Injectable()
export class TeamMatchMetadataService {

  constructor(
    private readonly matchesService: MatchesService
  ) {
  }

  async getTeamMatchMetadata(uniqueIndex: string): Promise<AppLinkMetadata> {
    try {
      const { data: match } = await firstValueFrom(this.matchesService.findMatchById(Number(uniqueIndex)));
      return {
        seoTitle: match.MatchId,
        seoDescription: `${match.HomeTeam} - ${match.AwayTeam} sur BePing`,
        imageUrl: "",
        appLink: "beping://beping.be/match/" + uniqueIndex
      };
    } catch (e) {
      return seoConstant;
    }

  }


}
