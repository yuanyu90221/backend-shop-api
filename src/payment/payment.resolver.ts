import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { Payment } from './entities/payment.entity';
import { CreateSessionResponseDto } from './dto/createSession.response';
import { CreateSessionInput } from './dto/createSession.input';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Mutation(() => CreateSessionResponseDto)
  createCheckoutSession(
    @Args({ name: 'items', type: () => [CreateSessionInput] })
    createPaymentInput: CreateSessionInput[],
  ) {
    return this.paymentService.createCheckoutSession(createPaymentInput);
  }
}
