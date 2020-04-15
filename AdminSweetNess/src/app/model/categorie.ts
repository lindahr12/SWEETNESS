export  class categorie{
  private _nom: string;
  private _image: string;
  private _parentid : string;



  constructor(nom: string, image: string, parent_id: string)
  {
    this._nom=nom;
    this._image=image;
    this._parentid=parent_id;
  }


  get nom():string{
    return this._nom;
  }
  set nom(value: string){
    this._nom= value;
  }
  get image():string{
    return this._image;
  }
  set image(value: string){
    this._image= value;
  }
  get parent_id():string{
    return this._parentid;
  }
  set parent_id(value: string){
    this._parentid= value;
  }



}
