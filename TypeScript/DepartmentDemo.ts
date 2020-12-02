export class Department
{
    did:number;
    dname:String;
    constructor(did:number,dname:String)
    {
        this.did=did;
        this.dname=dname;
    }
    listDetails():void
    {
        console.log("Department id="+this.did);
        console.log("Department name="+this.dname);
    }
}
var eobj=new Department(101,"Finance");
eobj.listDetails();
