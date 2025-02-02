import { Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProcessOrderDto } from './dto/process-order.dto';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern('orders.process')
  process(@Payload() processOrderDto: ProcessOrderDto) {
    return this.ordersService.process(processOrderDto);
  }
}
