export interface IServices {
    index: number,
    title: string,
    image: string[],
    content: string
}

 export interface IDoctors {
    index: number,
    title: string,
    image: string,
    content: string,
    // experience:string[],
    education:string[]
  }
  export interface IGallery {
    // index: number,
    image: string
  }