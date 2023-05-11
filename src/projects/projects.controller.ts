import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

const projects = [
  {id: 11, name: 'A1', isActive: true },
  {id: 2, name: 'A2', isActive: true },
  {id: 3, name: 'A3', isActive: true },
  {id: 4, name: 'A4', isActive: false },
  {id: 5, name: 'A5', isActive: false },
  {id: 6, name: 'A6', isActive: false },
  {id: 7, name: 'A7', isActive: false },
]

@Controller('projects')

export class ProjectController {
  @Get()
  async getAll() {
    return projects.sort((a, b) => a.id - b.id);
  }

  @Get('active')
   getActiveProject(
  ) {
    return projects.filter((project) => project.isActive);
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    const result = projects.find(project => project.id == id);
    if (!result) {
      throw new NotFoundException('No Project Found');
    }

    return result;
  }

}
