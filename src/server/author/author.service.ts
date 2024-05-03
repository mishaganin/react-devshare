import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  create(createAuthorDto: CreateAuthorDto) {
    return 'This action adds a new author';
  }

  findAll() {
    return 'This action returns all author';
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }

  publishArticle(title: string, description: string, authorId: string) {
    return this.prisma.article.create({ data: { title, description, authorId }});
  }
}
