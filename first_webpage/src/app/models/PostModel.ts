export interface IPostModel{
  id: number;
  userId: number;
  title: string;
  body: string;
}

export class PostModel implements IPostModel{
  id: number;
  userId: number;
  title: string;
  body: string;

  constructor(data: IPostModel){
    this.id = data.id;
    this.userId = data.userId;
    this.title = data.title;
    this.body = data.body;
  }
}
