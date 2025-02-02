import { Injectable } from '@nestjs/common';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrdersService {
  process(order: OrderEntity) {
    order.status = 'processing';
    return order;
  }
}
