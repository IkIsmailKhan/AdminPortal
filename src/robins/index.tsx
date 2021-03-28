import {CollectionRobin} from '@simplus/robin';
const VIDA_PRO_SERVER_URL = ((window as any).FOURA || {VIDA_PRO_SERVER_URL: ''}).VIDA_PRO_SERVER_URL || '/';

export const robins = {
	SimplusAuthRobin: new CollectionRobin({
		baseUrl: `${VIDA_PRO_SERVER_URL}/vida-pro/api/v1`
	}),
}
