import Model from "../Model";

export default class Contents extends Model {
	resource() {
		return "cms/content";
	}

	get typeName() {
		return this.type;
	}

	get activeName() {
		return this.active ? "فعال" : "غیر فعال";
	}
}
