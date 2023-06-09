"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Station = void 0;
const typeorm_1 = require("typeorm");
const Route_1 = require("./Route");
let Station = class Station {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Station.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Station.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Station.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "decimal", precision: 10, scale: 6 }),
    __metadata("design:type", Number)
], Station.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "decimal", precision: 10, scale: 6 }),
    __metadata("design:type", Number)
], Station.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Route_1.Route, (route) => route.startingStation),
    __metadata("design:type", Array)
], Station.prototype, "startingRoutes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Route_1.Route, (route) => route.endingStation),
    __metadata("design:type", Array)
], Station.prototype, "endingRoutes", void 0);
Station = __decorate([
    (0, typeorm_1.Entity)()
], Station);
exports.Station = Station;
