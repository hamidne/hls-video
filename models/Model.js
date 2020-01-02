import { Model as BaseModel } from "vue-api-query";
import moment from "jalali-moment";

export default class Model extends BaseModel {
	prefix() {
		return "CM";
	}

	baseURL() {
		return "/api/admin";
	}

	request(config) {
		return this.$http.request(config);
	}

	dateFormat(field, format = "YYYY/MM/DD") {
		return moment(field)
			.locale("fa")
			.format(format);
	}

	get created() {
		return this.dateFormat(this.created_at);
	}

	get updated() {
		return this.dateFormat(this.updated_at);
	}
}
