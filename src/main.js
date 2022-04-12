import Vue from 'vue';
import App from './App.vue';

/* BOOTSTRAP */
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/bootstrap-custom.scss';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

/* FONT AWESOME ICONS */
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faChevronRight,
	faChevronLeft,
	faLeaf,
	faSkull,
	faFire,
	faPlane,
	faDroplet,
	faBug,
	faFeather,
	faBoltLightning,
	faCircle,
	faDragon,
	faGhost,
	faWandMagicSparkles,
	faStar,
	faMound,
	faUserNinja,
	faMoon,
	faHandBackFist,
	faHillRockslide,
	faWrench,
	faIcicles,
	faBrain,
	faHeart,
	faWandSparkles,
	faShield,
	faBolt,
	faBarsStaggered,
	faGun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(
	faChevronRight,
	faChevronLeft,
	faLeaf,
	faSkull,
	faFire,
	faPlane,
	faDroplet,
	faBug,
	faFeather,
	faBoltLightning,
	faCircle,
	faDragon,
	faGhost,
	faWandMagicSparkles,
	faStar,
	faMound,
	faUserNinja,
	faMoon,
	faHandBackFist,
	faHillRockslide,
	faWrench,
	faIcicles,
	faBrain,
	faHeart,
	faWandSparkles,
	faShield,
	faBolt,
	faBarsStaggered,
	faGun
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
