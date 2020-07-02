export  class produit{
  private _nom: string;
  private _image: any;
  private _description: string;
  private _reference: string;
  private _is_active: any;
  private _fournisseur_id : any;

  constructor(nom: string, image: string, description:any,reference:any,is_active:any,fournisseur_id:any)
  {
    this._nom=nom;
    this._image=image;
    this._description=description;
    this._reference=reference;
    this._is_active=is_active;
    this._fournisseur_id= fournisseur_id;

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
  get reference()
  {
    return this._reference;
  }
  set reference(value:any)
  {
    this._reference= value;
  }
  get description()
  {
    return this._description;
  }
  set description(value:any)
  {
    this._description= value;
  }
  get is_active()
  {
    return this._is_active;
  }
  set is_active(value:any)
  {
    this._is_active= value;
  }
  get fournisseur_id()
  {
    return this.fournisseur_id;
  }
  set fournisseur(value:any)
  {
    this._fournisseur_id= value;
  }

}
