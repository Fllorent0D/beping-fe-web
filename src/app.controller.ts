import { Controller, Get, Param, Render } from "@nestjs/common";
import { AppService } from "./app.service";
import { ClubMetadataService } from "./services/club-metadata.service";
import { AppLinkMetadata } from "./models/data-metadata-tags.model";
import { seoConstant } from "./const/seo-constant";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly clubMetadata: ClubMetadataService
  ) {
  }

  @Get("club/:uniqueIndex")
  @Render("index")
  async getClub(
    @Param("uniqueIndex") uniqueIndex: string
  ): Promise<AppLinkMetadata> {
    const metadata = await this.clubMetadata.getClubMetadata(uniqueIndex);
    return { ...metadata };
  }

  @Get("*")
  @Render("index")
  async getOther(): Promise<AppLinkMetadata> {
    return seoConstant;
  }
}
