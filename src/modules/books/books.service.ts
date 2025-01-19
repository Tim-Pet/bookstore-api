import { Injectable } from '@nestjs/common';
import { Book } from './books.model';
import { PrismaService } from 'src/prisma.service';
import { AddBookInput } from './dto/add-book';
import { UpdateBookInput } from './dto/update-book';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Find a single book by its ID.
   * @param id - The ID of the book to find.
   * @returns The book if found, or null if not.
   */
  async findOneById(id: string): Promise<Book | null> {
    return this.prisma.book.findUnique({ where: { id } }) || null;
  }

  /**
   * Get all books.
   * @returns A list of all books.
   */
  async getAll(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  /**
   * Add a new book.
   * @param book - The book to add.
   * @returns The added book.
   */
  async addBook(input: AddBookInput): Promise<Book> {
    const book = await this.prisma.book.create({ data: input });
    return book;
  }

  /**
   * Update a book.
   * @param id - The ID of the book to update.
   * @param book - The new book data.
   * @returns The updated book.
   */
  async updateBook(id: string, input: UpdateBookInput): Promise<Book> {
    return this.prisma.book.update({ where: { id }, data: input });
  }
}
