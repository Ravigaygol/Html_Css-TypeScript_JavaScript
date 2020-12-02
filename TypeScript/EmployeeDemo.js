"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var DepartmentDemo_1 = require("./DepartmentDemo");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(did, dname, eid, ename, esal) {
        var _this = _super.call(this, did, dname) || this;
        _this.eid = eid;
        _this.ename = ename;
        _this.esal = esal;
        return _this;
    }
    Employee.prototype.listDetails = function () {
        console.log("Employee id:" + this.eid);
        console.log("Employee name" + this.ename);
        console.log("Employee salary" + this.esal);
        console.log("Department id=" + this.did);
        console.log("Department name=" + this.dname);
    };
    return Employee;
}(DepartmentDemo_1.Department));
var eobj = new Employee(101, "Finance", 1, "Ravi", 20000);
eobj.listDetails();
