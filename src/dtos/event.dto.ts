export interface CreateEventDto {
  title: string;
  description: string;
  price: number;
  startDate: Date;
  endDate: Date;
  location: string;
  capacity: number;
  organizerId: string;
}

export interface UpdateEventDto extends Partial<CreateEventDto> {
  id: string;
}