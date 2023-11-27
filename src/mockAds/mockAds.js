//https://github.com/googleads/google-publisher-tag-samples/blob/main/display-test-ad/js/demo.html

export const mockAds = [
	{
		networkCode: "/6355419/Travel/Asia",
		size: [728, 90],
		adUnitCode: "banner-ad-1",
	},
	{
		networkCode: "/6355419/Travel/Asia",
		size: [728, 90],
		targeting: [
			["color", "red"],
			["position", "atf"],
		],
		adUnitCode: "banner-ad-2",
	},
	{
		networkCode: "/6355419/Travel/Europe/France",
		size: [728, 90],
		adUnitCode: "banner-ad-3",
	},
	{
		networkCode: "/6355419/Travel/Europe/France",
		size: [728, 90],
		targeting: [["test", "privacy"]],
		adUnitCode: "banner-ad-728-90",
	},
	{
		networkCode: "/6355419/Travel/Europe/France",
		size: [750, 200],
		adUnitCode: "banner-ad-750-200",
	},
	{
		title: "300 x 250",
		networkCode: "/6355419/Travel/Europe/France",
		size: [300, 250],
		adUnitCode: "banner-ad-300-250",
	},
	{
		title: "320 x 50",
		networkCode: "/6355419/Travel/Europe",
		size: [320, 50],
		adUnitCode: "banner-ad-320-50",
	},
	{
		title: "FLUID AD",
		networkCode: "/6355419/Travel/Europe",
		size: ["fluid"],
		adUnitCode: "fluid-ad",
	},
	{
		title: "HARRODS FURNITURE AD - only mobile",
		networkCode: "/22247972615/Home_Furniture_PLP_All_Home_Furniture",
		size: [315, 210],
		adUnitCode: "harrods-furniture-03",
		useSizeMapping: false,
		isResponsive: false,
	},
	{
		title: "HARRODS FURNITURE RESPONSIVE AD - need sizeMapping()",
		networkCode: "/22247972615/Home_Furniture_PLP_All_Home_Furniture",
		size: [
			[1400, 450],
			[940, 302],
			[728, 302],
			[315, 210],
		],
		adUnitCode: "harrods-furniture-02",
		useSizeMapping: true,
		sizeMapping: "mapping_HARRODS_FURNITURE_RESPONSIVE_AD",
		isResponsive: true,
	},
	{
		title: "🚨 HARRODS LIVE HOMEPAGE RESPONSIVE",
		networkCode: "/22247972615/HomepagePremiumDeep",
		size: [
			[1400, 450],
			[940, 302],
			[728, 302],
			[315, 210],
		],
		adUnitCode: "harrods-home-01",
		useSizeMapping: true,
		sizeMapping: "mapping_HARRODS_FURNITURE_RESPONSIVE_AD",
		isResponsive: true,
	},
	{
		title: "🚨 HARRODS LIVE HOMEPAGE - only mobile",
		networkCode: "/22247972615/HomepagePremiumDeep",
		size: [315, 210],
		adUnitCode: "harrods-home-01-mobile-only",
	},
	//responsive
	//de X até 1023
	//a partir 1024 -> [728, 90]
	//a partir 1440 -> [750, 200]
	{
		title: "GOOGLE RESPONSIVE AD",
		networkCode: "/6355419/Travel/Europe",
		size: [
			[750, 200],
			[728, 90],
			[300, 250],
		],
		adUnitCode: "google-responsive-ad",
		useSizeMapping: true,
		sizeMapping: "mapping_GOOGLE_RESPONSIVE_AD",
		isResponsive: true,
	},
	{
		title: "MR PORTER LIVE DESIGNERS (este deixou de funcionar)",
		networkCode: "/9237/mrporter/designersupdate/intl",
		size: [
			[960, 250],
			[960, 250],
			[704, 90],
			[300, 250],
		],
		adUnitCode: "mrporter-live-designers",
		useSizeMapping: true,
		sizeMapping: "mapping_MR_PORTER_LIVE_DESIGNERS",
	},
	{
		title: "MR PORTER LIVE WHAT'S IN",
		networkCode: "/9237/mrporter/JournalRefresh/latest/latestbespoke",
		size: [0, 356],
		adUnitCode: "mrporter-live-whats-in",
	},
	// {
	// 	title: "MR PORTER LIVE THE JOURNAL - needs sizeMapping()",
	// 	networkCode: "/9237/mrporter/JournalRefresh/latest/latestbespoke",
	// 	size: [
	// 		[349, 196.844],
	// 		[234, 131.969],
	// 		[163, 92.094],
	// 		[311, 175.41],
	// 	],
	// 	adUnitCode: "mrporter-live-the-journal",
	// 	useSizeMapping: true,
	// 	sizeMapping: "mapping_MR_PORTER_LIVE_THE_JOURNAL",
	// },
	{
		title: "MR PORTER LIVE HOMEPAGE GRID",
		networkCode: "/9237/mrporter/HomepageM5Update/INTL",
		size: [298.67, 459],
		adUnitCode: "mrporter-live-homepage-grid",
	},
	{
		title: "300 x 600",
		networkCode: "/6355419/Travel/Europe/France/Paris",
		size: [300, 600],
		adUnitCode: "banner-ad-5",
	},
	{
		title: "960 x 180",
		networkCode: "/6355419/Travel/Europe",
		size: [960, 180],
		adUnitCode: "banner-ad-7",
	},

	{
		title: "ad-a-ads",
		networkCode: "/1234567890/responsive-ad",
		size: [320, 50],
		adUnitCode: "ad-a-ads",
	},
	{
		title: "sports",
		networkCode: "/111/example.com/electronics",
		size: [700, 200],
		adUnitCode: "ad-a-ads02",
	},
];
