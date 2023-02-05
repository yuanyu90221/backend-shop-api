import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ProductModule } from './product/product.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: (config: ConfigService) => {
        return {
          cors: {
            origin: config.get('CLIENT_URL'),
          },
          autoSchemaFile: join(
            process.cwd(),
            config.get<string>('SCHEMA_PATH'),
          ),
          sortSchema: true,
          playground: true,
        };
      },
      // imports: [ConfigModule],
      inject: [ConfigService],
    }),
    ProductModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
