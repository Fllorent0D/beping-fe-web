import { Injectable } from "@nestjs/common";
import { DivisionsService, MembersService } from "../tabt-client";
import { AppLinkMetadata } from "../models/data-metadata-tags.model";
import { firstValueFrom } from "rxjs";
import { seoConstant } from "../const/seo-constant";

@Injectable()
export class MemberMetadataService {

  constructor(
    private readonly membersService: MembersService
  ) {
  }

  async getMemberMetadata(uniqueIndex: string): Promise<AppLinkMetadata> {
    try {
      const { data: member } = await firstValueFrom(this.membersService.findMemberById(Number(uniqueIndex)));
      return {
        seoTitle: member.FirstName + ' ' + member.LastName,
        seoDescription: "Retrouvez toutes les infos de " + member.FirstName + ' ' + member.LastName + " sur BePing",
        imageUrl: "",
        appLink: "beping://beping.be/member/" + uniqueIndex
      };
    } catch (e) {
      return seoConstant;
    }

  }


}
