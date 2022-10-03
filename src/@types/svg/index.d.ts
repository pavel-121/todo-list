declare module "*.svg" {
  const content: any;
  export default content;
}

type Todo = {
  id: number,
  text: string,
  completed: boolean
}