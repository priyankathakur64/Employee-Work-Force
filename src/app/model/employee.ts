export interface Employee{
    id:number;
    name:string;
    department:string;
    status:string;
    phoneno:string;
    createdby:string;
    updatedby:string;
    createddtm:number;
    updateddtm:number;
    country:{
        cid:number,cname:string
    }
}