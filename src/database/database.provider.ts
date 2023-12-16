import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

import { Environment } from 'src/common/enum';

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService): Promise<TypeOrmModuleOptions> {
    const isDevelopmentEnv = config.get('NODE_ENV') !== Environment.Production;

    const dbConfig: TypeOrmModuleOptions = {
      type: 'postgres',
      host: config.get('DB_HOST'),
      port: +config.get('DB_PORT'),
      username: config.get('DB_USER'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_NAME'),
      autoLoadEntities: true,
      synchronize: isDevelopmentEnv,
      migrations: ['dist/database/migrations/*.js'],
      entities: ['dist/**/*.entity.js'],
      logging: 'all',
      extra: {
        cli: {
          migrationsDir: 'src/database/migrations',
        },
      },
    };

    return dbConfig;
  },
});
