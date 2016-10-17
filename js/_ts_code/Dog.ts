/**
 * Dog
 */
class Dog {
	private _name:string;
	private _color:string;

	constructor( name:string, color:string ) {
		this._name = name;
		this._color = color;
	}

	public barkTo( target:string ):void{
		console.log( `BARK! BARK! :${target} ` + "and..." + this.help );
	}
	public printData(  ):void{
		console.log( `my name is ${this._name} and I'm ${this._color}`);
	}
	private help(  ):string{
		return "did some internal help";
	}
}