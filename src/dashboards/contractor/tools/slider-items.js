const slider_subs = [
	{
		sub: 'invoices',
		options: [
			{
				name: 'all invoices',
				route: '/owner/invoices',
			},
		],
	},
	{
		sub: 'maintaince',
		options: [
			{
				name: 'pool maintaince',
				route: '/owner/pool-maintaince',
			},
			{
				name: 'lifter maintaince',
				route: '/owner/lifter-maintaince',
			},
			{
				name: 'garden maintaince',
				route: '/owner/garden-maintaince',
			},
			{
				name: 'house maintaince',
				route: '/owner/house-maintaince',
			},
		],
	},

	{
		sub: 'cleanliness',
		options: [
			{
				name: 'house cleanliness',
				route: '/owner/clean/house',
			},
			{
				name: 'insect cleanliness',
				route: '/owner/clean/insect',
			},
			{
				name: 'clothes cleanliness',
				route: '/owner/clean/clothes',
			},
			{
				name: 'cars cleanliness',
				route: '/owner/clean/car',
			},
		],
	},

	{
		sub: 'users',
		options: [
			{
				name: 'all users',
				route: '/owner/users',
			},
			{
				name: 'add user',
				route: '/owner/add-user',
			},
		],
	},
	{
		sub: 'permissions',
		options: [
			{
				name: 'all permissions',
				route: '/owner/permissions',
			},
			{
				name: 'add permission',
				route: '/owner/add-permission',
			},
		],
	},

	{
		sub: 'events',
		options: [
			{
				name: 'all events',
				route: '/owner/events',
			},
		],
	},
	{
		sub: 'news',
		options: [
			{
				name: 'all news',
				route: '/owner/news',
			},
		],
	},

	{
		sub: 'cameras',
		options: [
			{
				name: 'all cameras',
				route: '/owner/cameras',
			},
		],
	},
	{
		sub: 'rents',
		options: [
			{
				name: 'all rents',
				route: '/owner/rents',
			},
			{
				name: 'create rent request',
				route: '/owner/create-rent-request',
			},
		],
	},
	{
		sub: 'personal helper',
		options: [
			{
				name: 'all personal helper',
				route: '/owner/personal-helper',
			},
		],
	},

	{
		sub: 'complaints',
		options: [
			{
				name: 'all complaints',
				route: '/owner/complaints',
			},
		],
	},
];

export default slider_subs;
