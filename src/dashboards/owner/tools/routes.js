import CarClean from '../pages/cleanliness/car-clean';
import ClothesClean from '../pages/cleanliness/clothes-clean';
import HouseClean from '../pages/cleanliness/house-clean';
import InsectClean from '../pages/cleanliness/insect-clean';
import complaints from '../pages/complaints/complaints';
import Invoices from '../pages/invoices/invoices';
import GardenMaint from '../pages/maintaince/garden-maint';
import HouseMaint from '../pages/maintaince/house-maint';
import LifterMaint from '../pages/maintaince/lifter-maint';
import PoolMaint from '../pages/maintaince/pool-maint';
import Permissions from '../pages/permissions/permissions';
import Users from '../pages/users/users';

const paths = [
	{
		path: '/owner/invoices',
		component: Invoices,
	},
	{
		path: '/owner/permissions',
		component: Permissions,
	},
	{
		path: '/owner/maint/pool',
		component: PoolMaint,
	},
	{
		path: '/owner/maint/lifter',
		component: LifterMaint,
	},
	{
		path: '/owner/maint/garden',
		component: GardenMaint,
	},
	{
		path: '/owner/maint/house',
		component: HouseMaint,
	},
	{
		path: '/owner/clean/clothes',
		component: ClothesClean,
	},
	{
		path: '/owner/clean/car',
		component: CarClean,
	},
	{
		path: '/owner/clean/house',
		component: HouseClean,
	},
	{
		path: '/owner/clean/insect',
		component: InsectClean,
	},
	{
		path: '/owner/complaints',
		component: complaints,
	},
];

export default paths;
