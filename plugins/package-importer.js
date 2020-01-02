import Vue from "vue";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";

Vue.use(VuePersianDatetimePicker, {
	name: "date-picker",
	props: {
		format: "YYYY-MM-DD HH:mm:ss",
		displayFormat: "jYYYY/jMM/jDD"
	}
});
