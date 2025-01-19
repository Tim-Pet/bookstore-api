import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateBookInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  author?: string;

  @Field(() => Date, { nullable: true })
  publishedAt?: Date;
}
