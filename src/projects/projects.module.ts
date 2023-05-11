import { Module } from '@nestjs/common';
import { ProjectController } from './projects.controller';

@Module({
  controllers: [ProjectController],
})
export class ProjectModule {}
