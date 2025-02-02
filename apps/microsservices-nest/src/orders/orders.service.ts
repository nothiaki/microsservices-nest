import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  constructor(
    @Inject() private readonly ordersClient: ClientKafka
  ) {}
  create(createOrderDto: CreateOrderDto) {
    return this.ordersClient.emit('orders.process', createOrderDto);
  }
}
