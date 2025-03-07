interface ArrayCharacter{
    id:number;
    name:string;
    images:string[]
}

export interface Character {
  characters?:ArrayCharacter[];
  currentPage?: number;
  pageSize?: number;
  total?: number;
}
