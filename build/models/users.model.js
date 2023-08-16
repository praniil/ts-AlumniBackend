"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
exports.default = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: "users",
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _id_decorators;
    let _id_initializers = [];
    let _username_decorators;
    let _username_initializers = [];
    let _profession_decorators;
    let _profession_initializers = [];
    let _phone_no_decorators;
    let _phone_no_initializers = [];
    let _published_decorators;
    let _published_initializers = [];
    var Users = _classThis = class extends sequelize_typescript_1.Model {
        constructor() {
            super(...arguments);
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.username = __runInitializers(this, _username_initializers, void 0);
            this.profession = __runInitializers(this, _profession_initializers, void 0);
            this.phone_no = __runInitializers(this, _phone_no_initializers, void 0);
            this.published = __runInitializers(this, _published_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "Users");
    (() => {
        _id_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: "id"
            })];
        _username_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING(255),
                field: "username",
            })];
        _profession_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING(255),
                field: "profession",
            })];
        _phone_no_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                field: "phone_no",
            })];
        _published_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                field: "published",
            })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: obj => "username" in obj, get: obj => obj.username, set: (obj, value) => { obj.username = value; } } }, _username_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _profession_decorators, { kind: "field", name: "profession", static: false, private: false, access: { has: obj => "profession" in obj, get: obj => obj.profession, set: (obj, value) => { obj.profession = value; } } }, _profession_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _phone_no_decorators, { kind: "field", name: "phone_no", static: false, private: false, access: { has: obj => "phone_no" in obj, get: obj => obj.phone_no, set: (obj, value) => { obj.phone_no = value; } } }, _phone_no_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _published_decorators, { kind: "field", name: "published", static: false, private: false, access: { has: obj => "published" in obj, get: obj => obj.published, set: (obj, value) => { obj.published = value; } } }, _published_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Users = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Users = _classThis;
})();
