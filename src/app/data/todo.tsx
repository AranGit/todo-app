export interface TodoData {
  id: number,
  title: string,
  // more attribute if needs
}

export enum TodoAction {
  Idle,
  Creation,
  Edit,
  Delete
}
