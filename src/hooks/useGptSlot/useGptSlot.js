import { useEffect } from "react";

const useGptSlot = (mockAds) => {
	useEffect(() => {
		//window.googletag = window.googletag || { cmd: [] }; é igual a estas duas linhas
		const googletag = window.googletag || {};
		googletag.cmd = googletag.cmd || {};

		for (const ad of mockAds) {
			googletag.cmd.push(function () {
				const singleAdSlot = googletag
					.defineSlot(ad.networkCode, ad.size, ad.adUnitCode)
					.addService(googletag.pubads());

				if (ad.targeting) {
					for (const target of ad.targeting) {
						singleAdSlot.setTargeting(target[0], target[1]);
					}
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

export default useGptSlot;
