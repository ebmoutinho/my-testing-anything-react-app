import { useEffect } from "react";

const useAdSlot = (mockAds) => {
	useEffect(() => {
		//window.googletag = window.googletag || { cmd: [] }; é igual a estas duas linhas
		const googletag = window.googletag || {};
		googletag.cmd = googletag.cmd || {};

		// responsive-ad
		const mapping_GOOGLE_RESPONSIVE_AD = googletag
			.sizeMapping()
			//________page size__ad size
			.addSize([1440, 0], [750, 200]) //a partir de 1440px -> serve o ad 750x200
			.addSize([1024, 0], [728, 90]) //entre 1024x768 -> serve o ad 728x90
			.addSize([320, 0], [300, 250]) //entre 640 e 1023 -> serve o ad 300x250
			.addSize([0, 0], [])
			.build();

		//harrods responsive-ad
		const mapping_HARRODS_FURNITURE_RESPONSIVE_AD = googletag
			.sizeMapping()
			//________page size__ad size
			.addSize([1440, 0], [1400, 450])
			.addSize([1024, 0], [940, 302])
			.addSize([768, 0], [728, 302])
			.addSize([310, 0], [315, 210])
			.addSize([0, 0], [])
			.build();

		// const mapping_MR_PORTER_LIVE_THE_JOURNAL = googletag
		// 	.sizeMapping()
		// 	//________page size__ad size
		// 	.addSize([1440, 0], [349, 196.844])
		// 	.addSize([1024, 0], [234, 131.969])
		// 	.addSize([768, 0], [163, 92.094])
		// 	.addSize([310, 0], [311, 175.41])
		// 	.addSize([0, 0], [])
		// 	.build();

		const mapping_MR_PORTER_LIVE_DESIGNERS = googletag
			.sizeMapping()
			//________page size__ad size
			.addSize([1440, 0], [960, 250])
			.addSize([1024, 0], [960, 250])
			.addSize([768, 0], [704, 90])
			.addSize([310, 0], [300, 250])
			.addSize([0, 0], [])
			.build();

		// responsiveAdSlot.defineSizeMapping(mapping);

		for (const ad of mockAds) {
			googletag.cmd.push(function () {
				const singleAdSlot = googletag
					.defineSlot(ad.networkCode, ad.size, ad.adUnitCode)
					// .defineSizeMapping(mapping)
					.addService(googletag.pubads());

				if (ad.targeting) {
					for (const target of ad.targeting) {
						singleAdSlot.setTargeting(target[0], target[1]);
					}
				}

				if (ad.useSizeMapping) {
					if (ad.sizeMapping === "mapping_HARRODS_FURNITURE_RESPONSIVE_AD") {
						singleAdSlot.defineSizeMapping(
							mapping_HARRODS_FURNITURE_RESPONSIVE_AD
						);
					// } else if (ad.sizeMapping === "mapping_MR_PORTER_LIVE_THE_JOURNAL") {
					// 	singleAdSlot.defineSizeMapping(
					// 		mapping_MR_PORTER_LIVE_THE_JOURNAL
					// 	);
					// } else if (ad.sizeMapping === "mapping_MR_PORTER_LIVE_DESIGNERS") {
						singleAdSlot.defineSizeMapping(mapping_MR_PORTER_LIVE_DESIGNERS);
					} else if (ad.sizeMapping === "mapping_GOOGLE_RESPONSIVE_AD") {
						singleAdSlot.defineSizeMapping(mapping_GOOGLE_RESPONSIVE_AD);
					}
					// singleAdSlot.defineSizeMapping(ad.sizeMapping);
				}

				if (ad.multiSize) {
				}

				googletag.pubads().enableSingleRequest();
				googletag.enableServices();
			});

			googletag.cmd.push(function () {
				googletag.display(ad.adUnitCode);
			});
		}
	}, [mockAds]);
};

export default useAdSlot;

//The mapping is then associated with an ad slot
//by calling the Slot.defineSizeMapping() method

// const mapping = googletag
// .sizeMapping()
// .addSize([1440, 1024], [750, 200])
// .addSize(
// 	[1024, 768],[[750, 200],[728, 90]]
// ) //>= 1024x768 -> serve 750x200 OU 728x90
// .addSize([640, 480], [300, 250]) //entre 640 e 1023 -> serve o 300x250
// .addSize([0, 0], [])
// .build();

/* 		const PREMIUM_DEEP_SIZES = [
			[315, 400],
			[728, 302],
			[940, 302],
			[1400, 450],
		]; */
