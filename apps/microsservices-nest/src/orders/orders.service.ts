import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class OrdersService implements OnModuleInit {
  constructor(
    @Inject('ORDERS_SERVICE') private readonly ordersClient: ClientKafka
  ) {}

  onModuleInit() {
    this.ordersClient.subscribeToResponseOf('orders.process');
  }

  async create(createOrderDto: CreateOrderDto) {
    return this.ordersClient.send('orders.process', createOrderDto);
  }
}
