import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ApiModule, Configuration } from "./tabt-client";
import { ClubMetadataService } from "./services/club-metadata.service";
import { DivisionMetadataService } from "./services/division-metadata.service";
import { MemberMetadataService } from "./services/member-metadata.service";
import { TeamMatchMetadataService } from "./services/team-match-metadata.service";

@Module({
  imports: [
    ApiModule.forRoot(() => new Configuration({ basePath: "https://api.beping.be" }))
  ],
  controllers: [AppController],
  providers: [AppService, ClubMetadataService, DivisionMetadataService, MemberMetadataService, TeamMatchMetadataService]
})
export class AppModule {
}
