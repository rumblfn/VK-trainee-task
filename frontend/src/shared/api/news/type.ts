export interface INew {
  readonly id: number,
  readonly title: string,
  readonly content: string,
  readonly rating: number,
  readonly author: string,
  readonly created_at: string,
}

export interface IComment {
  readonly id: number,
  readonly content: string,
  readonly created_at: string,
  readonly parent: number | null,
  readonly replies_count: number,
}

export interface INewsCommentsInfo {
  readonly root_comments: IComment[],
  readonly total_comments_count: number,
}