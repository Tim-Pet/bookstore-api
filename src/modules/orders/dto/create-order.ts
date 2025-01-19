import { IsArray, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  userId: string;

  @IsArray()
  @IsNotEmpty()
  bookIds: string[];
}
