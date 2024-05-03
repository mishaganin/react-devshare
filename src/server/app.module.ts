import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AuthorController } from '@server/author/author.controller';
import { ReaderController } from '@server/reader/reader.controller';
import { ArticleController } from '@server/article/article.controller';
import { PrismaService } from '@server/prisma.service';
import { AuthService } from '@server/auth/auth.service';
import { AuthorService } from '@server/author/author.service';
import { ReaderService } from '@server/reader/reader.service';
import { ArticleService } from '@server/article/article.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReaderModule } from './reader/reader.module';
import { AuthorModule } from './author/author.module';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: true }),
      /* значение null сообщает nest-next
          искать экраны в корне pages */
      { viewsDir: null }
    ),
    AuthModule,
    AuthorModule,
    ReaderModule,
    ArticleModule,
  ],
  controllers: [AppController, AuthorController, AuthorController, ReaderController, ArticleController],
  providers: [AppService, PrismaService, AuthService, AuthorService, ReaderService, ArticleService],
})
export class AppModule {}
