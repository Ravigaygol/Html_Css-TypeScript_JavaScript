import {Department} from "./DepartmentDemo";
class Employee extends Department 
{
    eid:number;
    ename:String;
    esal:number;
    constructor(did:number,dname:String,eid:number,ename:String,esal:number,)
    {
        super(did,dname);
        this.eid=eid;
        this.ename=ename;
        this.esal=esal;
    }
    listDetails():void
    {
        console.log("Employee id:"+this.eid);
        console.log("Employee name"+this.ename);
        console.log("Employee salary"+this.esal);
        console.log("Department id="+this.did);
        console.log("Department name="+this.dname);
    }
}
var eobj=new Employee(101,"Finance",1,"Ravi",20000);
eobj.listDetails();