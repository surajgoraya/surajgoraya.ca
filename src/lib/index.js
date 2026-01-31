// place files you want to import through the `$lib` alias in this folder.
import Menu from './components/Menu.svelte';
import { MENU_ITEMS } from './config/menu.config';

const components = { Menu };
const configuration = { MENU_ITEMS };

export { configuration, components };
