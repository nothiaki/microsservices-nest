import { Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrderEntity } from './entities/order.entity';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern('orders.process')
  process(@Payload() order: OrderEntity) {
    return this.ordersService.process(order);
  }
}
