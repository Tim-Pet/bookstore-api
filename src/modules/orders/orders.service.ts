import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderDto } from './dto/create-order';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async addOrder(data: CreateOrderDto) {
    return this.prisma.order.create({
      data: {
        user: { connect: { id: data.userId } },
        bookIds: data.bookIds,
      },
    });
  }

  async getOrder(id: string) {
    return this.prisma.order.findUnique({ where: { id } });
  }
}
