import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddBookInput {
  @Field()
  title: string;

  @Field()
  author: string;

  @Field(() => Date)
  publishedAt: Date;
}
