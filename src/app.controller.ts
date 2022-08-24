import { Controller, Get, Param, Render, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { ClubMetadataService } from "./services/club-metadata.service";
import { AppLinkMetadata } from "./models/data-metadata-tags.model";
import { seoConstant } from "./const/seo-constant";
import { TeamMatchMetadataService } from "./services/team-match-metadata.service";
import { DivisionMetadataService } from "./services/division-metadata.service";
import { MemberMetadataService } from "./services/member-metadata.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly clubMetadataService: ClubMetadataService,
    private readonly teamMatchMetadataService: TeamMatchMetadataService,
    private readonly divisionMetadataService: DivisionMetadataService,
    private readonly memberMetadataService: MemberMetadataService
  ) {
  }

  @Get("club/:uniqueIndex")
  @Render("index")
  async getClub(
    @Param("uniqueIndex") uniqueIndex: string,
    @Req() request
  ): Promise<AppLinkMetadata> {
    console.log(request);
    return { ... await this.clubMetadataService.getClubMetadata(uniqueIndex), originalUrl: request.originalUrl };
  }

  @Get("match/:uniqueIndex")
  @Render("index")
  async getMatch(
    @Param("uniqueIndex") uniqueIndex: string,
    @Req() request
  ): Promise<AppLinkMetadata> {
    return {...await this.teamMatchMetadataService.getTeamMatchMetadata(uniqueIndex), originalUrl: request.originalUrl};
  }

  @Get("division/:matchUniqueIndex")
  @Render("index")
  async getDivision(
    @Param("uniqueIndex") uniqueIndex: string,
    @Req() request
  ): Promise<AppLinkMetadata> {
    return {...await this.divisionMetadataService.getDivisionMetadata(uniqueIndex), originalUrl: request.originalUrl};
  }

  @Get("member/:uniqueIndex")
  @Render("index")
  async getMember(
    @Param("uniqueIndex") uniqueIndex: string,
    @Req() request
  ): Promise<AppLinkMetadata> {
    return {...await this.memberMetadataService.getMemberMetadata(uniqueIndex), originalUrl: request.originalUrl};
  }


  @Get("*")
  @Render("index")
  async getOther(): Promise<AppLinkMetadata> {
    return seoConstant;
  }
}
