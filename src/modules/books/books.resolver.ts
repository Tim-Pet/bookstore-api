import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './books.model';
import { GetBookArgs } from './dto/get-book';
import { BooksService } from './books.service';
import { UpdateBookInput } from './dto/update-book';
import { AddBookInput } from './dto/add-book';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private bookService: BooksService) {}

  @Query(() => Book, { name: 'book' })
  async getBook(@Args() args: GetBookArgs): Promise<Book> {
    return this.bookService.findOneById(args.id);
  }

  @Query(() => Book, { name: 'books' })
  async getBooks() {
    return this.bookService.getAll();
  }

  @Mutation(() => Book)
  async addBook(@Args('input') input: AddBookInput) {
    return this.bookService.addBook(input);
  }

  @Mutation(() => Book)
  async updateBook(
    @Args('id') id: string,
    @Args('input') input: UpdateBookInput,
  ) {
    return this.bookService.updateBook(id, input);
  }
}
