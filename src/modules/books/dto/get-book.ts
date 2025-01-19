import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetBookArgs {
  @Field()
  id: string;
}
