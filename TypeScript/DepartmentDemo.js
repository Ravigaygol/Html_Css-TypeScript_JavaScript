"use strict";
exports.__esModule = true;
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(did, dname) {
        this.did = did;
        this.dname = dname;
    }
    Department.prototype.listDetails = function () {
        console.log("Department id=" + this.did);
        console.log("Department name=" + this.dname);
    };
    return Department;
}());
exports.Department = Department;
var eobj = new Department(101, "Finance");
eobj.listDetails();
