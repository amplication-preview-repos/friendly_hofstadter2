/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AudioFile } from "./AudioFile";
import { AudioFileCountArgs } from "./AudioFileCountArgs";
import { AudioFileFindManyArgs } from "./AudioFileFindManyArgs";
import { AudioFileFindUniqueArgs } from "./AudioFileFindUniqueArgs";
import { CreateAudioFileArgs } from "./CreateAudioFileArgs";
import { UpdateAudioFileArgs } from "./UpdateAudioFileArgs";
import { DeleteAudioFileArgs } from "./DeleteAudioFileArgs";
import { AudioFileCreateInput } from "./AudioFileCreateInput";
import { AudioFileService } from "../audioFile.service";
@graphql.Resolver(() => AudioFile)
export class AudioFileResolverBase {
  constructor(protected readonly service: AudioFileService) {}

  async _audioFilesMeta(
    @graphql.Args() args: AudioFileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AudioFile])
  async audioFiles(
    @graphql.Args() args: AudioFileFindManyArgs
  ): Promise<AudioFile[]> {
    return this.service.audioFiles(args);
  }

  @graphql.Query(() => AudioFile, { nullable: true })
  async audioFile(
    @graphql.Args() args: AudioFileFindUniqueArgs
  ): Promise<AudioFile | null> {
    const result = await this.service.audioFile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AudioFile)
  async createAudioFile(
    @graphql.Args() args: CreateAudioFileArgs
  ): Promise<AudioFile> {
    return await this.service.createAudioFile({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AudioFile)
  async updateAudioFile(
    @graphql.Args() args: UpdateAudioFileArgs
  ): Promise<AudioFile | null> {
    try {
      return await this.service.updateAudioFile({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AudioFile)
  async deleteAudioFile(
    @graphql.Args() args: DeleteAudioFileArgs
  ): Promise<AudioFile | null> {
    try {
      return await this.service.deleteAudioFile(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Query(() => AudioFile)
  async GetAudioFileStatus(
    @graphql.Args()
    args: AudioFileFindUniqueArgs
  ): Promise<AudioFile> {
    return this.service.GetAudioFileStatus(args);
  }

  @graphql.Mutation(() => AudioFile)
  async UploadAudioFile(
    @graphql.Args()
    args: AudioFileCreateInput
  ): Promise<AudioFile> {
    return this.service.UploadAudioFile(args);
  }
}
