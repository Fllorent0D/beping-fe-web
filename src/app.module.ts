import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ApiModule, Configuration } from "./tabt-client";
import { ClubMetadataService } from "./services/club-metadata.service";

@Module({
  imports: [
    ApiModule.forRoot(() => new Configuration({ basePath: "https://tabt-rest.floca.be" }))
  ],
  controllers: [AppController],
  providers: [AppService, ClubMetadataService]
})
export class AppModule {
}
