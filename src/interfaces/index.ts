export interface IFile {
  name: string;
  isFolder: boolean;
  Children?: IFile[];
  content?:string;
}